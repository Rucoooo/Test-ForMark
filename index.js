// index.js

const express = require("express");
const bodyParser = require("body-parser");
const Stripe = require("stripe");
const axios = require("axios");

require("dotenv").config();

const app = express();
app.use(bodyParser.json());

const stripe = Stripe(process.env.STRIPE_SECRET);

// Stripe Webhook endpoint
app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error("Webhook Error:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle completed checkout
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const amount = session.amount_total / 100; // Stripe sends cents
      const email = session.customer_email;

      // ==== Facebook Conversion API ====
      try {
        await axios.post(
          "https://graph.facebook.com/v19.0/YOUR_PIXEL_ID/events?access_token=YOUR_ACCESS_TOKEN",
          {
            data: [
              {
                event_name: "Purchase",
                event_time: Math.floor(Date.now() / 1000),
                user_data: {
                  em: email,
                },
                custom_data: {
                  currency: "USD",
                  value: amount,
                },
              },
            ],
          }
        );
        console.log("✅ Sent to Facebook CAPI");
      } catch (fbErr) {
        console.error("❌ Facebook CAPI Error:", fbErr.message);
      }

      // ==== Google Ads / GA4 ====
      try {
        await axios.post(
          "https://www.google-analytics.com/mp/collect?measurement_id=G-XXXXXXX&api_secret=YOUR_API_SECRET",
          {
            client_id: "1234567890.abcdef", // replace with actual client ID from front-end
            events: [
              {
                name: "purchase",
                params: {
                  currency: "USD",
                  value: amount,
                },
              },
            ],
          }
        );
        console.log("✅ Sent to Google");
      } catch (googleErr) {
        console.error("❌ Google Error:", googleErr.message);
      }
    }

    res.status(200).json({ received: true });
  }
);

app.get("/", (req, res) => {
  res.send("Server is running.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server live on port ${PORT}`));

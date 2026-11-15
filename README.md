# BharatShip GST — Product Website

A static, single-page product & documentation site for the BharatShip GST Shopify app (Delhivery / Blue Dart courier automation + GST invoices).

## Files
- `index.html` — landing page (hero, features, GST engine + calculator, workflow, architecture, courier integrations, waitlist, contact)
- `privacy.html` — privacy policy (needed for Shopify App Store submission)
- `styles.css`, `app.js` — styles and the GST calculator / waitlist script

## Run locally
Just open `index.html` in a browser. No build step.

## Deploy on AWS Amplify
1. AWS Console → **Amplify** → **Create new app**.
2. Choose **GitHub**, authorize, and pick this repository (`main` branch).
3. Click **Next** → **Save and deploy**. No build settings are needed — it's plain static HTML.

## To customise
- Replace `support@example.com` in `index.html` and `privacy.html` with your real contact email.

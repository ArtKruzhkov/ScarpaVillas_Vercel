# Scarpa Villas

A responsive multilingual website for **Scarpa Villas**, a luxury hospitality project located in the wine region of Piedmont, Italy.

The website presents the villas, the Scarpa winery, local experiences, curated stays, the surrounding region, and editorial content through the Journal.

## Features

- Responsive design for desktop, tablet, and mobile
- English and Italian localization
- Client-side routing with localized URLs
- Animated page transitions and scroll-based animations
- Interactive image sliders and galleries
- Villa and experience pages
- Journal with individual article pages
- Newsletter subscription integrated with Brevo
- Contact and inquiry forms powered by EmailJS
- Serverless API endpoint for secure newsletter subscriptions
- Production deployment on Vercel

## Tech Stack

- **React**
- **TypeScript**
- **React Router**
- **Tailwind CSS**
- **Framer Motion**
- **Swiper**
- **i18next / react-i18next**
- **EmailJS**
- **Brevo API**
- **Vercel Serverless Functions**
- **Create React App**

## Project Structure

```text
scarpa-villas/
├── api/
│   └── subscribe.js
├── public/
│   └── images/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── sections/
│   ├── locales/
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── vercel.json
```

## Getting Started

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd scarpa-villas
npm install
```

Start the development server:

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

## Production Build

Create an optimized production build:

```bash
npm run build
```

The generated production files will be placed in the `build` directory.

## Environment Variables

The project uses environment variables for external services.

Create a `.env.local` file for local development when required:

```env
REACT_APP_EMAILJS_SERVICE_ID=
REACT_APP_EMAILJS_TEMPLATE_ID=
REACT_APP_EMAILJS_PUBLIC_KEY=
REACT_APP_VILLA_ADVICE_TEMPLATE_ID=
BREVO_API_KEY=
```

> Never commit `.env` or `.env.local` files containing API keys or other secrets.

Variables prefixed with `REACT_APP_` are used by the client application.

`BREVO_API_KEY` is a server-side variable and is used only by the Vercel serverless API endpoint.

## Newsletter Integration

Newsletter subscriptions are handled through:

```text
POST /api/subscribe
```

The serverless function securely communicates with the **Brevo API** and adds or updates subscribers without exposing the Brevo API key to the browser.

Subscriber language (`EN` or `IT`) is also stored in Brevo and can be used for audience segmentation and localized campaigns.

## Deployment

The project is deployed with **Vercel** and connected to the GitHub repository.

Changes pushed to the production branch trigger a new deployment automatically.

Before deploying, verify that the project builds successfully:

```bash
npm run build
```

## Languages

The website currently supports:

- English (`/`)
- Italian (`/it`)

Localized routes are preserved across the main sections of the website.

## License

This project was developed for **Scarpa Villas**.

All brand assets, photography, text content, and other proprietary materials belong to their respective owners.

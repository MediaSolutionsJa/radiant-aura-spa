# Radiant Aura Spa

This project contains the source code for the Radiant Aura Spa website.

## Development

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```

## Technologies

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

### Instagram Integration

The gallery page pulls images from Instagram using the Basic Display API. Create an access token and retrieve the user ID for [@llcauraessence](https://www.instagram.com/llcauraessence/), then expose both to the app via environment variables:

```bash
VITE_INSTAGRAM_ACCESS_TOKEN=YOUR_TOKEN_HERE
VITE_INSTAGRAM_USER_ID=LLC_AURA_ESSENCE_USER_ID
```

Add these variables to your `.env` file before running the development server.

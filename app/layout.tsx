import * as React from 'react'
import '../styles/globals.css'
import { Source_Serif_Pro } from '@next/font/google';
import { Source_Sans_Pro } from '@next/font/google';

// If loading a variable font, you don't need to specify the font weight
const serif = Source_Serif_Pro({ style: 'normal', preload: true, weight: "700", variable: '--font-serif' });
const sans = Source_Sans_Pro({ style: 'normal', preload: true, weight: "400", variable: '--font-sans-serif' })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
      {`
:root {
  --main-bg-color: 251, 248, 231;
  --quote-text-color: 0, 0, 0;
  --quote-marker-color: 255, 0, 0;
  --author-text-color: 164, 148, 106;
  --font-serif: ${serif.style.fontFamily};
  --font-sans-serif: ${sans.style.fontFamily};
}
@media (prefers-color-scheme: dark) {
  :root {
    --main-bg-color: 255, 0, 0;
    --quote-text-color: 255, 255, 255;
    --quote-marker-color: 255, 255, 255;
    --author-text-color: 0, 0,0;
    --font-serif: ${serif.style.fontFamily};
    --font-sans-serif: ${sans.style.fontFamily};
  }
}
      `}
      </style>
      </head>
      <body className="selection:bg-accent selection:text-white">{children}</body>
    </html>
  );
}

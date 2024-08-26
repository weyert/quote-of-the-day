import * as React from 'react'
import '../styles/globals.css'
import { serif, sans } from '../styles/fonts'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <style type="text/css">
      {`
:root {
  --main-bg-color: 251, 248, 231;
  --quote-text-color: 0, 0, 0;
  --quote-marker-color: 255, 0, 0;
  --author-text-color: 164, 148, 106;
}

@media (prefers-color-scheme: dark) {
  :root {
    --main-bg-color: 255, 0, 0;
    --quote-text-color: 255, 255, 255;
    --quote-marker-color: 255, 255, 255;
    --author-text-color: 0, 0,0;
  }
}
      `}
      </style>
      </head>
      <body className="selection:bg-accent selection:text-white">{children}</body>
    </html>
  );
}

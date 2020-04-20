import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

function fetcher(url) {
  return fetch(url).then((r) => r.json());
}

export default function Index() {
  // Reference to the element containing the words to animate
  const quoteElement = React.useRef(null);

  React.useEffect(() => {
    document.body.classList.add("has-dark-mode");
    if (quoteElement.current) {
      quoteElement.current.classList.add("anim-fadeIn");
    }
  }, []);

  const { query } = useRouter();
  const { data, error } = useSWR(
    `/api/randomQuote${query.author ? "?author=" + query.author : ""}`,
    fetcher
  );

  const isDarkMode = query.mode == "dark";

  // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`
  const author = data?.author;
  let quote = data?.content ?? "Missing quote";
  let quoteAsWords = quote.split(" ");

  if (!data) quote = "Loading...";
  if (error) quote = "Failed to fetch the quote.";

  return (
    <main className="wrapper align">
      <div className="container">
        <blockquote className="quote" ref={quoteElement}>
          <p className="quote__body">{quote}</p>
          {author && (
            <p>
              <cite className="quote__author">{author}</cite>
            </p>
          )}
        </blockquote>
      </div>
      <style jsx>{`
        .quote {
          position: relative;
          width: 35em;
          margin: 0;
          padding-left: 4em;
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .anim-fadeIn {
          animation: fadeIn 340ms cubic-bezier(0, 0.2, 0.6, 0.1) forwards;
        }

        .anim-fadeOut {
          animation: fadeOut 340ms cubic-bezier(0, 0.2, 0.6, 0.1) forwards;
        }

        .quote::before {
          content: "“";
          position: absolute;
          top: 0;
          left: 0.325em;

          font-size: 4em;
          font-weight: 800;
          line-height: 1;

          color: var(--quote-marker-color);
        }

        .quote__body {
          font-weight: 600;
          font-size: 1.5em;
          color: var(--quote-text-color);
        }

        .quote__author {
          font-size: 0.75em;
          font-style: normal;
          font-family: "Source Sans Pro", Helvetica, sans-serif;
          font-weight: 300;
          line-height: 1;
          vertical-align: middle;
          color: var(--author-text-color);
        }

        .quote__author::before {
          content: "—";
          padding-right: 0.25em;
        }
      `}</style>
    </main>
  );
}

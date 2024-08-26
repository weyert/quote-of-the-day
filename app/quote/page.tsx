import * as React from "react";
import { UsageTracker } from "../../components/UsageTracker";

async function getQuoteOfDay() {
  const apiHost = process.env.API_HOST;
  const res = await fetch(`${apiHost}/api/randomQuote`, { cache: "no-store" });
  return res.json();
}

async function getFactOfDay() {
  const apiHost = process.env.API_HOST;
  const res = await fetch(`${apiHost}/api/randomFact`, { cache: "no-store" });
  return res.json();
}

async function getBirthOfDay() {
  const apiHost = process.env.API_HOST;
  const res = await fetch(`${apiHost}/api/randomBirth`, { cache: "no-store" });
  return res.json();
}

export default async function Page() {
  const quote = await getQuoteOfDay();
  const dailyFact = await getFactOfDay();
  const birth = await getBirthOfDay();

  return (
    <main className="h-screen bg-page dark:bg-page text-body dark:text-body wrapper align">
      <div className="flex flex-col space-y-6 h-full items-center justify-center">
        <blockquote className="text-2xl w-1/2 flex flex-col space-y-4">
          <header className="flex flex-row uppercase text-byline space-x-2">
            <h1>QUOTE OF THE DAY</h1>
          </header>
          <section>
            <p className="text-body leading-relaxed quote relative font-serif">
              {quote.content}
            </p>
            {quote.author && (
              <p>
                <cite className="text-byline not-italic">{quote.author}</cite>
              </p>
            )}
          </section>
        </blockquote>
        <div className="border-accent border-2 h-0 w-1/2">&nbsp;</div>
        <blockquote className="text-2xl w-1/2 flex flex-col space-y-2">
          <header className="flex flex-row uppercase text-byline space-x-2">
            <h1>TODAY IN</h1>
            <h2>{dailyFact.year}</h2>
          </header>
          <section>
            <p className="text-body leading-relaxed quote relative font-serif">
              {dailyFact.description}
            </p>
          </section>
        </blockquote>
        <pre>{JSON.stringify({ yearOfQuote })}</pre>

        <UsageTracker usageFacts={{
          quoteYear: quote.year ?? quote.date,
          factYear: dailyFact.year,
          birthYear: birth.year,
        }} />

      </div>
    </main>
  );
}

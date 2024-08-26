import posthog from 'posthog-js'
import * as React from 'react'
import { UsageTracker } from '../components/UsageTracker'


async function getQuoteOfDay() {
  const apiHost = process.env.API_HOST;
  console.log(`API_HOST:`, process.env.API_HOST);
  console.log(`COOLIFY_FQDN:`, process.env.COOLIFY_FQDN);
  console.log(`NEXT_PUBLIC_SOURCE_COMMIT:`, process.env.NEXT_PUBLIC_SOURCE_COMMIT)
  const requestUrl = `${apiHost}/api/randomQuote`;
  const res = await fetch(requestUrl, { cache: "no-store" });
  return res.json();
}

async function getFactOfDay() {
  const apiHost = process.env.API_HOST;
  const requestUrl = `${apiHost}/api/randomFact`;
  const res = await fetch(requestUrl, { cache: "no-store" });
  return res.json();
}

async function getBirthOfDay() {
  const apiHost = process.env.API_HOST;
  const requestUrl = `${apiHost}/api/randomBirth`;
  const res = await fetch(requestUrl, { cache: "no-store" });
  return res.json();
}

export default async function Page() {
  const quote = await getQuoteOfDay();
  const dailyFact = await getFactOfDay()
  const birth = await getBirthOfDay();

  const [name, ...other] = birth.description.split(',')

  return (
    <main className="h-screen bg-page dark:bg-page text-body dark:text-body wrapper align">
      <div className="flex flex-col space-y-6 h-full items-center justify-center">
        <blockquote className="text-2xl w-1/2 flex flex-col space-y-5">
          <header className="flex flex-row uppercase text-byline space-x-2">
            <h1>QUOTE OF THE DAY</h1>
          </header>
          <section>
            <p className="text-body leading-relaxed quote relative font-serif">{quote.content}</p>
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
            <p className="text-body leading-relaxed quote relative font-serif">{dailyFact.description}</p>
          </section>
        </blockquote>
        <div className="border-accent border-2 h-0 w-1/2">&nbsp;</div>
        <blockquote className="text-2xl w-1/2 flex flex-col space-y-2">
          <header className="flex flex-row uppercase text-byline space-x-2">
            <h1>BIRTH TODAY IN</h1>
            <h2>{birth.year}</h2>
          </header>
          <section>
            <p className="text-body leading-relaxed quote relative font-serif">{name}</p>
            <p className="text-body leading-relaxed relative font-serif">{other}</p>
          </section>
        </blockquote>

        <UsageTracker usageFacts={{
          quoteYear: quote.year ?? quote.date,
          factYear: dailyFact.year,
          birthYear: birth.year,
        }} />

      </div>

      <footer className="text-byline leading-relaxed fixed bottom-0 left-0 w-full p-2">
        <div className="container mx-auto text-end">
          v{process.env.NEXT_PUBLIC_SOURCE_COMMIT}
        </div>
      </footer>
    </main>
  )
}

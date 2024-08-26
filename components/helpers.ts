export function stringToBase64Url(input) {
  // Step 1: Encode the string to standard base64
  let base64 = btoa(unescape(encodeURIComponent(input)));

  // Step 2: Replace characters according to base64url specifications
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function base64UrlToString(input) {
  // Step 1: Replace characters back to standard base64
  let base64 = input.replace(/-/g, '+').replace(/_/g, '/');

  // Step 2: Add removed padding if necessary
  switch (base64.length % 4) {
    case 2: base64 += '=='; break;
    case 3: base64 += '='; break;
  }

  // Step 3: Decode the string
  return decodeURIComponent(escape(atob(base64)));
}

export async function getFactCorrections(id: string) {
  console.log(`API_HOST:`, process.env.API_HOST);
  console.log(`COOLIFY_FQDN:`, process.env.COOLIFY_FQDN);
  console.log(`NEXT_PUBLIC_SOURCE_COMMIT:`, process.env.NEXT_PUBLIC_SOURCE_COMMIT)
  const apiHost = process.env.API_HOST;
  try {
    const requestUrl = `${apiHost}/api/details/${id}`;
    const res = await fetch(requestUrl, { method: "GET", cache: "default" });
    if (!res.ok) {
      throw new Error(`Failed to fetch the corrections`)
    }

    return res.json();
  } catch (err: unknown) {
    throw new Error(`Failed to fetch the corrections`)
  }
}

export async function getQuoteOfDay() {
  console.log(`API_HOST:`, process.env.API_HOST);
  console.log(`COOLIFY_FQDN:`, process.env.COOLIFY_FQDN);
  console.log(`NEXT_PUBLIC_SOURCE_COMMIT:`, process.env.NEXT_PUBLIC_SOURCE_COMMIT)
  const apiHost = process.env.API_HOST;
  const requestUrl = `${apiHost}/api/randomQuote`;
  const res = await fetch(requestUrl, { cache: "no-store" });
  return res.json();
}

export async function getFactOfDay() {
  console.log(`API_HOST:`, process.env.API_HOST);
  console.log(`COOLIFY_FQDN:`, process.env.COOLIFY_FQDN);
  console.log(`NEXT_PUBLIC_SOURCE_COMMIT:`, process.env.NEXT_PUBLIC_SOURCE_COMMIT)
  const apiHost = process.env.API_HOST;
  const requestUrl = `${apiHost}/api/randomFact`;
  const res = await fetch(requestUrl, { cache: "no-store" });
  return res.json();
}

export async function getBirthOfDay() {
  console.log(`API_HOST:`, process.env.API_HOST);
  console.log(`COOLIFY_FQDN:`, process.env.COOLIFY_FQDN);
  console.log(`NEXT_PUBLIC_SOURCE_COMMIT:`, process.env.NEXT_PUBLIC_SOURCE_COMMIT)
  const apiHost = process.env.API_HOST;
  const requestUrl = `${apiHost}/api/randomBirth`;
  const res = await fetch(requestUrl, { cache: "no-store" });
  return res.json();
}

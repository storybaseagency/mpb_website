// Meldet alle URLs aus der Sitemap per IndexNow an Bing, Yandex & Co.
// Nach jedem Deployment ausführen: npm run indexnow
const host = "www.medienproduktionbruchwalski.de";
const key = "d857b05a245cb34055ad92f6c0a4847f";

const sitemap = await (await fetch(`https://${host}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} – ${urlList.length} URLs gemeldet`);

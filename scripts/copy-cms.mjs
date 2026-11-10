// Kopiert Sveltia CMS aus node_modules nach public/admin/ (ohne Source-Maps),
// damit /admin/ keine Skripte von fremden Servern lädt.
import { cpSync, rmSync } from "node:fs";

const src = "node_modules/@sveltia/cms/dist";
const dest = "public/admin";
rmSync(`${dest}/chunks`, { recursive: true, force: true });
cpSync(src, dest, {
  recursive: true,
  filter: (path) => !path.endsWith(".map") && !path.endsWith(".mjs"),
});
console.log("Sveltia CMS nach public/admin/ kopiert");

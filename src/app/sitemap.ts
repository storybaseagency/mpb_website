import type { MetadataRoute } from "next";
import { services, site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...services.map((s) => `/leistungen/${s.slug}/`)];
  return paths.map((p) => ({ url: `${site.url}${p}` }));
}

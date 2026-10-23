import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    ...services.map((s) => `/${s.slug}/`),
    "/referenzen/",
    "/ueber-jan-bruchwalski/",
    "/faq/",
  ];
  const lastModified = new Date();
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified }));
}

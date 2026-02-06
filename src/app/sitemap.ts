import { getPosts, CONTENT_PATHS } from "@/app/utils/utils";
import { baseURL, routes as routesConfig } from "@/app/resources";

export default async function sitemap() {
  const blogs = getPosts([...CONTENT_PATHS.BLOG]).map((post) => ({
    url: `https://${baseURL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const works = getPosts([...CONTENT_PATHS.WORK]).map((post) => ({
    url: `https://${baseURL}/work/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const activeRoutes = Object.keys(routesConfig).filter((route) => routesConfig[route]);

  const routes = activeRoutes.map((route) => ({
    url: `https://${baseURL}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...works];
}

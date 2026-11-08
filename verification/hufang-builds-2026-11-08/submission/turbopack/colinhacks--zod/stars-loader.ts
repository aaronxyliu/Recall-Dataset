import snapshot from "./github-stars.json";

const stars: Readonly<Record<string, number | null>> = snapshot;

export async function fetchStars(resources: { slug: string; stars?: number }[]) {
  for (const resource of resources) {
    const repository = resource.slug.split("/").slice(0, 2).join("/").toLowerCase();
    const count = stars[repository];
    if (resource.stars === undefined && typeof count === "number") {
      resource.stars = count;
    }
  }
  resources.sort((a, b) => (b.stars || 0) - (a.stars || 0));
}

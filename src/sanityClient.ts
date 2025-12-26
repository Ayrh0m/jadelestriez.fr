import { createClient } from "@sanity/client";
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";

export const client = createClient({
  projectId: "hkvy3bqb",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-12-26",
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export type { SanityImageSource };

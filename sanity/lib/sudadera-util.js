import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "Lexardi Lab",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

export async function getSudaderaBySlug(slug) {
  const sudadera = await client.fetch(
    groq`*[_type == "sudadera" && slug.current == $slug]{
      _id,
      name,
      slug,
      description,
      price,
      "image": image.asset->url,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
      ref
    }`,
    { slug },
    {
      next: {
        revalidate: 1, //revalidate every 30 days
      },
    }
  );

  return sudadera; // Assuming you expect a single product, not an array
}

export async function getAllSudaderas() {
  const sudaderas = await client.fetch(
    groq`*[_type == "sudadera"]{
      _id,
      name,
      slug,
      description,
      price,
      "image": image.asset->url,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
      ref
    }`,
    {
      next: {
        revalidateTag: 1, //revalidate every hour
      },
    }
  );

  return sudaderas;
}

export async function getSudaderas() {
  const sudaderas = await client.fetch(
    groq`*[_type == "sudadera"] |  [0...6] {
      _id,
      name,
      slug,
      description,
      price,
      "image": image.asset->url,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
      ref
    }`,
    { next: { revalidateTag: 1 } } // revalidate every hour
  );

  return sudaderas;
}

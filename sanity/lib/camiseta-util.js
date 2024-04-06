import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "Lexardi Lab",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

export async function getCamisetaBySlug(slug) {
  const camiseta = await client.fetch(
    groq`*[_type == "camiseta" && slug.current == $slug]{
      _id,
      name,
      slug,
      description,
      price,
      "image": image.asset->url,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
    }`,
    { slug },
    {
      next: {
        revalidate: 1, //revalidate every 30 days
      },
    }
  );

  return camiseta; // Assuming you expect a single product, not an array
}

export async function getAllCamisetas() {
  const camisetas = await client.fetch(
    groq`*[_type == "camiseta"]{
      _id,
      name,
      slug,
      description,
      price,
      "image": image.asset->url,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
    }`,
    {
      next: {
        revalidateTag: 1, //revalidate every hour
      },
    }
  );

  return camisetas;
}

export async function getCamisetas() {
  const camisetas = await client.fetch(
    groq`*[_type == "camiseta"] |  [0...6] {
      _id,
      name,
      slug,
      description,
      price,
      "image": image.asset->url,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
    }`,
    { next: { revalidateTag: 1 } } // revalidate every hour
  );

  return camisetas;
}

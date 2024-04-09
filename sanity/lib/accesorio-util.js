import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "Lexardi Lab",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

export async function getAccesorioBySlug(slug) {
  const accesorio = await client.fetch(
    groq`*[_type == "accesorio" && slug.current == $slug]{
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

  return accesorio; // Assuming you expect a single product, not an array
}

export async function getAllAccesorios() {
  const accesorios = await client.fetch(
    groq`*[_type == "accesorio"]{
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

  return accesorios;
}

export async function getAccesorios() {
  const accesorios = await client.fetch(
    groq`*[_type == "accesorio"] |  [0...6] {
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

  return accesorios;
}

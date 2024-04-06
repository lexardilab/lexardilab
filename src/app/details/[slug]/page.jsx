import Details from "../../components/Details";
import { getProductBySlug } from "../../../../sanity/lib/product-util";

export default async function page({ params }) {
  const { slug } = params;

  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return (
    <div>
      <div className="mb-20">
        <Details product={product[0]} />
      </div>
    </div>
  );
}

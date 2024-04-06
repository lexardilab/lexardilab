import Camiseta from "../../components/Camiseta";
import { getCamisetaBySlug } from "../../../../sanity/lib/camiseta-util";

export default async function page({ params }) {
  const { slug } = params;

  const product = await getCamisetaBySlug(slug);

  if (!camiseta) {
    return {
      notFound: true,
    };
  }

  return (
    <div>
      <div className="mb-20">
        <Camiseta camiseta={camiseta[0]} />
      </div>
    </div>
  );
}

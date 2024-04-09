import Sudadera from "../../components/Sudadera";
import { getSudaderaBySlug } from "../../../../sanity/lib/sudadera-util";

export default async function page({ params }) {
  const { slug } = params;

  const sudadera = await getSudaderaBySlug(slug);

  if (!sudadera) {
    return {
      notFound: true,
    };
  }

  return (
    <div>
      <div className="mb-20">
        <Sudadera sudadera={sudadera[0]} />
      </div>
    </div>
  );
}

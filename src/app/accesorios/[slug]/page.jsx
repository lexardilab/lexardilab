import Accesorio from "../../components/Accesorio";
import { getAccesorioBySlug } from "../../../../sanity/lib/accesorio-util";

export default async function page({ params }) {
  const { slug } = params;

  const accesorio = await getAccesorioBySlug(slug);

  if (!accesorio) {
    return {
      notFound: true,
    };
  }

  return (
    <div>
      <div className="mb-20">
        <Accesorio accesorio={accesorio[0]} />
      </div>
    </div>
  );
}

import JournalDetails from "../../components/JournalDetails";
import { getJournalBySlug } from "../../../../sanity/lib/journal-util";

export default async function page({ params }) {
  const { slug } = params;

  const journal = await getJournalBySlug(slug);

  if (!journal) {
    return {
      notFound: true,
    };
  }

  return (
    <div>
      <div className="mb-20">
        <JournalDetails journal={journal[0]} />
      </div>
    </div>
  );
}

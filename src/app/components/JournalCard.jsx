import Image from "next/image";
import Link from "next/link";
import { montserrat, roboto_mono } from "../utils/fonts";
function JournalCard({ journal }) {
  return (
    <>
      <div className="flex px-4">
        <Link href={`/journals/${journal?.slug}`}>
          <div className="pt-6 cursor-pointer">
            <div className="">
              <h1 className={`${roboto_mono.className} pb-2 text-sm`}>
                {journal?.name}
              </h1>
            </div>
            <Image
              src={journal?.image}
              width="600"
              height="400"
              alt="Journal Lexardi Lab"
            />
          </div>
        </Link>
      </div>
    </>
  );
}

export default JournalCard;

import Image from "next/image";
import { lusitana } from "@/src/app/ui/fonts";

async function getData(slug: string) {
  const res = await fetch(`https://dog.ceo/api/breed/${slug}/images`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  return (
    <main
      className={`${lusitana.className} flex-col items-center justify-between p-12`}
    >
      <h1 className="text-3xl font-bold text-left mb-8 underline">
        {params.slug}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.message.slice(0, 25).map((imgurl: string) => (
          <div
            key={imgurl}
            className="rounded-lg overflow-hidden transition-transform duration-500 hover:border-2 hover:border-black"
            style={{ aspectRatio: "1 / 1" }} // 유지하고자 하는 가로 세로 비율에 맞춰 조정
          >
            <Image
              src={imgurl}
              alt="Picture of the dog"
              className="object-cover w-full h-full"
              width={500}
              height={500}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPMqAcAAVUA6UpAAT4AAAAASUVORK5CYII="
            />
          </div>
        ))}
      </div>
    </main>
  );
}

import Image from "next/image";

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
  //   console.log("데이터", data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{params.slug}</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.message.slice(0, 25).map((imgurl: string) => (
          <Image
            className="rounded-lg transition-transform duration-500 hover:border-2 hover:border-black"
            key={imgurl}
            src={imgurl}
            width={500}
            height={500}
            layout="responsive"
            objectFit="cover"
            alt="Picture of the dog"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPMqAcAAVUA6UpAAT4AAAAASUVORK5CYII="
          />
        ))}
      </div>
    </main>
  );
}

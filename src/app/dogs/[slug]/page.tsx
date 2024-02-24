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
          <div
            key={imgurl}
            className="rounded-lg overflow-hidden transition-transform duration-500 hover:border-2 hover:border-black"
            style={{ aspectRatio: "1 / 1" }} // 유지하고자 하는 가로 세로 비율에 맞춰 조정
          >
            {/* <img
              src={imgurl}
              alt="Picture of the dog"
              className="object-cover w-full h-full"
              style={{ minHeight: 0 }} // 이미지의 최소 높이를 0으로 설정하여 공백을 일정하게 만듦
            /> */}
            <Image
              src={imgurl}
              alt="Picture of the dog"
              className="object-cover w-full h-full"
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

import { RandomImage } from "../components/RandomImage";

export async function getRandomPic() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function RootPage() {
  const data = await getRandomPic();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <RandomImage imageData={data} />
    </main>
  );
}

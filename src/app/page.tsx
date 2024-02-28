import { RandomImage } from "../components/RandomImage";
import { getRandomPic } from "./functions/getRandomPic";

export default async function RootPage() {
  const data = await getRandomPic();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <RandomImage imageData={data} />
    </main>
  );
}

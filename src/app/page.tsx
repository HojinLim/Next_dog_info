import Link from "next/link";

async function getCategory() {
  const res = await fetch("https://dog.ceo/api/breeds/list/all", {
    cache: "force-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary

    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getCategory();
  const sorts = Object.keys(data.message);

  // console.log(sorts);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/about">To about</Link>
    </main>
  );
}

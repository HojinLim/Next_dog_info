"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  console.log(process.env.BASE_URL!);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      about page
    </main>
  );
}

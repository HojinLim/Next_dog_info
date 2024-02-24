import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import ScrollToTopButton from "../components/ScrollToTopButton";
import "./globals.css";
async function getCategory() {
  const res = await fetch("https://dog.ceo/api/breeds/list/all", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getCategory();
  const sorts = Object.keys(data.message);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {/* Layout UI */}
        <Navbar sorts={sorts} />
        <main>{children}</main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}

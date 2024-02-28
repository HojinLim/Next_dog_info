export async function getRandomPic() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

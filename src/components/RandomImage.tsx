"use client";

import Image from "next/image";

import { ImageProps } from "../types";
import { useState } from "react";
import { getRandomPic } from "../app/functions/getRandomPic";

export const RandomImage = ({ imageData }: { imageData: ImageProps }) => {
  const [image, setImage] = useState<ImageProps>(imageData);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Image
        className="rounded-lg overflow-hidden transition-transform duration-500 hover:border-2 hover:border-black"
        style={{ aspectRatio: "1 / 1" }}
        src={image.message}
        alt="logo"
        width={450}
        height={450}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPMqAcAAVUA6UpAAT4AAAAASUVORK5CYII="
      />

      <button
        className="btn btn-wide btn-outline"
        onClick={async () => {
          try {
            setLoading(true);
            setImage(await getRandomPic());
          } finally {
            setLoading(false);
          }
        }}
      >
        {loading ? (
          <>
            <span className="loading loading-spinner"></span>
            Loading...
          </>
        ) : (
          "Random Dog Image"
        )}
      </button>
    </>
  );
};

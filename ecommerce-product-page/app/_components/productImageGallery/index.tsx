"use client";

import { useState } from "react";
import { ProductImageGalleryProps } from "./productImageGalleryProps";
import Image from "next/image";

const ProductImageGallery = ({
  closeImageGallery,
}: ProductImageGalleryProps) => {
  const images = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];
  const [counter, setCounter] = useState(0);

  const previousImage = () => {
    setCounter((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCounter((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="fixed bottom-0 left-0 z-40 flex min-h-screen w-full flex-col items-center justify-center bg-black bg-opacity-75">
      <div className="flex flex-col">
        <button
          onClick={closeImageGallery}
          className="relative mb-4 h-6 w-6 self-end"
        >
          <Image src={"/images/icon-close.svg"} alt="" fill />
        </button>
        <section>
          <div className="relative h-full w-full">
            <button
              className="absolute -left-[1.75rem] bottom-[16rem] z-50 grid h-14 w-14 place-content-center rounded-full bg-neutral-light-grayish-blue"
              onClick={previousImage}
            >
              <Image
                src={"/images/icon-previous.svg"}
                alt=""
                width={14}
                className="pr-[0.125rem]"
                height={14}
              />
            </button>
            <div className="relative h-[34.375rem] w-[34.375rem]">
              <Image
                src={images[counter]}
                alt=""
                fill
                className="rounded-2xl"
              />
            </div>
            <button
              className="absolute -right-[1.75rem] bottom-[16rem] z-50 grid h-14 w-14 place-content-center rounded-full bg-neutral-light-grayish-blue"
              onClick={nextImage}
            >
              <Image
                src={"/images/icon-next.svg"}
                alt=""
                width={14}
                className="pl-[0.125rem]"
                height={14}
              />
            </button>
          </div>
          <ul className="mt-8 flex w-full justify-evenly">
            {images.map((img, index) => (
              <li key={index}>
                <button
                  onClick={() => setCounter(index)}
                  className={`relative h-[5.75rem] w-[5.75rem] rounded-[0.625rem] ${
                    counter === index
                      ? "overflow-hidden rounded-[0.625rem] bg-neutral-white outline outline-primary-orange"
                      : ""
                  }`}
                >
                  <Image
                    src={img.replace(".jpg", "-thumbnail.jpg")}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className={`rounded-[0.625rem] ${
                      counter === index ? "opacity-75" : ""
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ProductImageGallery;

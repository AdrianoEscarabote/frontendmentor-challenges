"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ProductImageGallery from "../productImageGallery";

const ProductImages = () => {
  const [selectedImage, setSelectedImage] = useState(
    "/images/image-product-1.jpg",
  );
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleImageClick = () => {
    if (isLargeScreen) {
      setShowModal(true);
    }
  };

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
    <section className="md:pl-12">
      <div className="relative md:h-[27.8125rem] md:w-[27.8125rem]">
        {isLargeScreen && (
          <button onClick={handleImageClick}>
            <Image src={selectedImage} alt="" fill className="rounded-2xl" />
          </button>
        )}
        {!isLargeScreen && (
          <div className="relative h-full w-full">
            <button
              className="absolute bottom-[42%] left-[1rem] z-40 grid h-14 w-14 place-content-center rounded-full bg-neutral-light-grayish-blue"
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
            <div className="relative h-full w-full">
              <Image
                src={images[counter]}
                alt=""
                width={430}
                height={380}
                className="h-[23.75rem] w-[28.125rem] object-cover sm:rounded-2xl"
              />
            </div>
            <button
              className="absolute bottom-[42%] right-[1rem] z-40 grid h-14 w-14 place-content-center rounded-full bg-neutral-light-grayish-blue"
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
        )}

        {showModal && isLargeScreen && (
          <ProductImageGallery
            closeImageGallery={() => setShowModal(!showModal)}
          />
        )}
      </div>
      {isLargeScreen && (
        <ul className="mt-8 flex w-full justify-between">
          <li>
            <button
              onClick={() => setSelectedImage("/images/image-product-1.jpg")}
              className={`relative h-[5.5rem] w-[5.5rem] hover:opacity-50 ${selectedImage.includes("1") ? "overflow-hidden rounded-[0.625rem] outline outline-primary-orange" : ""} `}
            >
              <Image
                src={"/images/image-product-1-thumbnail.jpg"}
                alt=""
                fill
                className={`rounded-[0.625rem] ${selectedImage.includes("1") ? "opacity-25" : ""}`}
              />
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedImage("/images/image-product-2.jpg")}
              className={`relative h-[5.5rem] w-[5.5rem] hover:opacity-50 ${selectedImage.includes("2") ? "overflow-hidden rounded-[0.625rem] outline outline-primary-orange" : ""} `}
            >
              <Image
                src={"/images/image-product-2-thumbnail.jpg"}
                alt=""
                fill
                className={`rounded-[0.625rem] ${selectedImage.includes("2") ? "opacity-25" : ""}`}
              />
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedImage("/images/image-product-3.jpg")}
              className={`relative h-[5.5rem] w-[5.5rem] hover:opacity-50 ${selectedImage.includes("3") ? "overflow-hidden rounded-[0.625rem] outline outline-primary-orange" : ""} `}
            >
              <Image
                src={"/images/image-product-3-thumbnail.jpg"}
                alt=""
                fill
                className={`rounded-[0.625rem] ${selectedImage.includes("3") ? "opacity-25" : ""}`}
              />
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedImage("/images/image-product-4.jpg")}
              className={`relative h-[5.5rem] w-[5.5rem] hover:opacity-50 ${selectedImage.includes("4") ? "overflow-hidden rounded-[0.625rem] outline outline-primary-orange" : ""} `}
            >
              <Image
                src={"/images/image-product-4-thumbnail.jpg"}
                alt=""
                fill
                className={`rounded-[0.625rem] ${selectedImage.includes("4") ? "opacity-25" : ""}`}
              />
            </button>
          </li>
        </ul>
      )}
      {!isLargeScreen && (
        <ul className="mt-8 flex w-full justify-evenly">
          {images.map((img, index) => (
            <li key={index}>
              <button
                onClick={() => setCounter(index)}
                className={`relative h-[4.5rem] w-[4.5rem] rounded-[0.625rem] sm:h-[5.75rem] sm:w-[5.75rem] ${
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
      )}
    </section>
  );
};

export default ProductImages;

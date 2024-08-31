"use client";

import mainPicture from "../../public//main_picture.jpg";
import Image from "next/image";
import Header from "../components/Header";
import BookCarouselBlock from "../components/BookCarouselBlock";

export default function Home() {
  return (
    <div>
      <Header />
      <Image
        className="w-full"
        src={mainPicture}
        width={3000}
        height={1800}
        alt="Picture of the author"
        quality={100}
      />
      <BookCarouselBlock />
    </div>
  );
}

"use client";

import BooksCarousel from "../components/BooksCarusel";
import mainPicture from "../../public//main_picture.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        className="w-full"
        src={mainPicture}
        width={3000}
        height={1800}
        alt="Picture of the author"
        quality={100}
      />
      <BooksCarousel bookCarouselCategory={"book"} />
    </div>
  );
}

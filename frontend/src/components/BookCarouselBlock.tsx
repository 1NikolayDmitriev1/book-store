"use client";

import BooksCarousel from "./BooksCarusel";

export default function BookCarouselBlock() {
  return (
    <div className="container max-w-7xl mx-auto text-emerald-900">
      <div>
        <span>Summer Booknotes 2024</span>
        <BooksCarousel bookCarouselCategory={"book"} />
      </div>
      <div>
        <span className="w-max text-7xl text-emerald-900 mx-auto">New Releases</span>
        <BooksCarousel bookCarouselCategory={"book"} />
      </div>
      <div>
        <span>Preorder Now</span>
        <BooksCarousel bookCarouselCategory={"book"} />
      </div>
      <div>
        <span>Nonfiction Bestsellers</span>
        <BooksCarousel bookCarouselCategory={"book"} />
      </div>
      <div>
        <span>Fiction Bestsellers</span>
        <BooksCarousel bookCarouselCategory={"book"} />
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

interface BooksCarouselProps {
  bookCarouselCategory: string;
}

export default function BooksCarousel({
  bookCarouselCategory,
}: BooksCarouselProps) {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {


      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `/api/books?category=${bookCarouselCategory}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const data = await response.json();
        setBooks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [bookCarouselCategory]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={50}
      slidesPerView={8}
    >
      {books?.map((book: any) => (
        <SwiperSlide key={book.id}>
          <Image
            width={200}
            height={150}
            src={book.volumeInfo.imageLinks?.thumbnail}
            alt={book.volumeInfo.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

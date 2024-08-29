import { useRouter } from 'next/router';
import { searchBooks } from '../../lib/fetchBooks';
import { useEffect, useState } from 'react';

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query; // Динамический параметр маршрута
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (id) {
        searchBooks(id as string).then(setBook);
    }
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.authors?.join(', ')}</p>
      <p>{book.description}</p>
    </div>
  );
}

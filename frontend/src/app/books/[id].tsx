import { useRouter } from "next/router";

import { useEffect, useState } from "react";

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query; 
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (id) {
      ///
    }
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.authors?.join(", ")}</p>
      <p>{book.description}</p>
    </div>
  );
}

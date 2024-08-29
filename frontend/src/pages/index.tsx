import { useState } from 'react';
import { searchBooks } from '../lib/fetchBooks';
import { gql, useMutation } from '@apollo/client';

const ADD_TO_CART = gql`
  mutation AddToCart($userId: ID!, $bookId: String!) {
    addToCart(userId: $userId, bookId: $bookId) {
      id
      bookId
    }
  }
`;

export default function Home() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [addToCart] = useMutation(ADD_TO_CART);

  const handleSearch = async () => {
    const results = await searchBooks(query);
    setBooks(results);
  };

  const handleAddToCart = (bookId: string) => {
    addToCart({ variables: { userId: '1', bookId } });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books"
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {books.map((book: any) => (
          <li key={book.id}>
            <h3>{book.volumeInfo.title}</h3>
            <p>Author: {book.volumeInfo.authors?.join(', ')}</p>
            <button onClick={() => handleAddToCart(book.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

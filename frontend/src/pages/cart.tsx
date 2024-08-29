import { gql, useQuery, useMutation } from '@apollo/client';

const GET_USER_CART = gql`
  query GetUserCart($userId: ID!) {
    user(id: $userId) {
      cart {
        id
        bookId
      }
    }
  }
`;

const REMOVE_FROM_CART = gql`
  mutation RemoveFromCart($userId: ID!, $bookId: String!) {
    removeFromCart(userId: $userId, bookId: $bookId) {
      id
    }
  }
`;

export default function Cart() {
  const { data, loading, error } = useQuery(GET_USER_CART, { variables: { userId: '1' } });
  const [removeFromCart] = useMutation(REMOVE_FROM_CART);

  const handleRemove = (bookId: string) => {
    removeFromCart({ variables: { userId: '1', bookId } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {data.user.cart.map((item: any) => (
          <li key={item.id}>
            Book ID: {item.bookId}
            <button onClick={() => handleRemove(item.bookId)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

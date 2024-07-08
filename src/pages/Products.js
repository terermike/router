import { Link } from "react-router-dom";
const PRODUCTS = [
  { id: "p1", title: "product-1" },
  { id: "p2", title: "product-2" },
  { id: "p3", title: "product-3" },
];

export default function ProductsPage() {
  return (
    <>
      <p>Products Page</p>
      <ul>
        {PRODUCTS.map((item) => (
          <li key={item.id}>
            <Link to={`/products/${item.id}`}> {item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <p>
        Go to <Link to={"/products"}> the list of products</Link>
      </p>
    </>
  );
}

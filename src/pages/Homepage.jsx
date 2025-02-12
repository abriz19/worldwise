import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <Link to="/pricing">Pricing</Link>
      {/* <PageNav /> */}
      <h1>WorldWise</h1>
    </div>
  );
}

import { Link } from "react-router-dom";

const Navigation = () => {
    return (
      <div>
        <nav className="container mx-auto flex items-center justify-between py-4">
          <Link to="/">
            <img
              style={{ height: 80 }}
              src="/images/pizzaLogo.png"
              alt="logo"
            />
          </Link>
          <ul className="flex space-x-6 mr-2 items-center">
            <li className="px-2 py-1 rounded-md hover:bg-red-300 transition">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2 py-1 rounded-md hover:bg-red-300 transition">
              <Link to="/addproduct">Add Product</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default Navigation
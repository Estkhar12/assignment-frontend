import Product from "../components/Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://product-api-estkhar.up.railway.app/product"
        );
        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="mx-20 pb-16">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-8">
        top new products
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
        {
          products.map((product) => (
            <Product product={product} key={product._id} />
          ))
        }
      </div>
    </div>
  );
};

export default Home;

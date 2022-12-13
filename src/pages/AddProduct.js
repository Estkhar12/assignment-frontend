import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    company: "",
    price: "",
    rating: "",
    featured: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://product-api-estkhar.up.railway.app/product",
        product
      );
      console.log(res);
      toast.success("Product added successfully");
    } catch (error) {
      toast.error("Something went wrong. Try again!");
      console.log(error);
    }
  };

  return (
    <div className="px-10 flex justify-center mb-32">
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Product Name
            </label>
            <input
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              name="product_name"
              type="text"
              required
              placeholder="Enter Product Name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Company Name
            </label>
            <input
              onChange={(e) =>
                setProduct({ ...product, company: e.target.value })
              }
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              name="company_name"
              type="text"
              required
              placeholder="Enter company Name"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Price
            </label>
            <input
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              name="price"
              type="number"
              required
              placeholder="Enter a Price"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Featured
            </label>
            <div className="relative">
              <select
                onChange={(e) =>
                  setProduct({ ...product, featured: e.target.value })
                }
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name="featured"
              >
                <option>Select</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Rating
            </label>
            <input
              onChange={(e) =>
                setProduct({ ...product, rating: e.target.value })
              }
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              name="rating"
              type="number"
              required
              placeholder="Produc Rating"
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="md:mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

// <div className=" m-4 p-3 rounded-lg ">
//   <form
//     className="product-form add-product-shadow"
//     action="/"
//     method="POST"
//   >
//     <div className="mb-5  ">
//       <label className="mr-5 " for="title">
//         Title
//       </label>
//       <input type="text" name="title" id="title" />
//     </div>
//     <div className="mb-5  ">
//       <label className="mr-5" for="price">
//         Price
//       </label>
//       <input type="number" name="price" id="price" step="0.01" />
//     </div>
//     <div className="mb-5  ">
//       <label className="mr-5" for="description">
//         Rating
//       </label>
//       <input type="number" name="price" id="price" step="0.01" />
//     </div>
//     <div className="mb-5  ">
//       <label className="mr-5" for="description">
//         Featured
//       </label>
//       <select>
//         <option>True</option>
//         <option>False</option>
//       </select>
//     </div>
//     <div className="mb-5">
//       <label className="mr-5" for="description">
//         Company
//       </label>
//       <input className="border" type="text" name="title" id="title" />
//     </div>
//     <div className=" text-center">
//       <button
//         className="py-2 mt-8 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
//         type="submit"
//       >
//         Add Product
//       </button>
//     </div>
//   </form>
// </div>

export default AddProduct;

const Product = ({ product }) => {
  return (
    <div className="group rounded bg-yellow-400 shadow overflow-hidden">
      <div className="pt-4 pb-3 px-4">
        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800">
          {product.name}
        </h4>
        <hr />
        <div className="flex items-baseline mb-1 space-x-2 mt-3">
          <p className="text-xl text-primary font-roboto font-semibold">
            Price: {product.price}
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-black-400">
            <span>Rating : {product.rating}</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-black-400 font-bold">
            {product.featured && <span>Featured</span>}
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-black-400">
            <span>Company Name: {product.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

import React, { useEffect } from "react";
import { add } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/ProductSlice";
import { STATUSES } from "../../store/ProductSlice";
import './products.scss'

const Products = () => {
  const dispatch = useDispatch();

  // const title = product?.title.slice(0, 20);

  const { data: products, status } = useSelector((state) => state.product);

  //const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());

    //const fetchProducts = async () => {
    //    const res = await fetch('https://fakestoreapi.com/products');
    //    const data = await res.json();
    //    console.log(data);
    //    setProducts(data);
    //};
    //fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <div className="products">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <p>{product.title.slice(0,20)}</p>
          <p>${product.price}</p>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to cart 
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;

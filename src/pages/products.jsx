import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "kursi tua",
    price: 992345,
    image: "/images/kursi-tua.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, possimus dolores? Mollitia distinctio error a",
  },
  {
    id: 2,
    name: "kursi baru",
    price: 1237,
    image: "/images/kursi-baru.jpg",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 3,
    name: "kursi baru",
    price: 11934,
    image: "/images/kursi-baru.jpg",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 4,
    name: "kursi baru",
    price: 1723478,
    image: "/images/kursi-baru.jpg",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 5,
    name: "kursi baru",
    price: 121237,
    image: "/images/kursi-baru.jpg",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  // const [Namanya = cart, FunctionNya= setCart]
  const [cart, setCart] = useState([
    {
      id: 1,
      quantity: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, quantity: 1 }]);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="bg-black ml-5" onClick={handleLogout}>
          Signout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-2">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.quantity}</td>
                    <td>
                      Rp{" "}
                      {(item.quantity * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
// 10.41
// 17.28

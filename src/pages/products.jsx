import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "kursi tua",
    price: 99,
    image: "/images/kursi-tua.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, possimus dolores? Mollitia distinctio error a",
  },
  {
    id: 2,
    name: "kursi baru",
    price: 127,
    image: "/images/kursi-baru.jpg",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    window.location.href = "/login"
  };

  return (
    <Fragment>
      <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-20">
        {email}
        <Button classname="bg-black ml-5" onClick={handleLogout}>
          Signout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductsPage;

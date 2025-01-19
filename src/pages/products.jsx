import CardProduct from "../components/Fragments/CardProduct";

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
    description:
      "Lorem ipsum dolor sit amet consectetur",
  },
];

const ProductsPage = () => {
  return (
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
  );
};

export default ProductsPage;

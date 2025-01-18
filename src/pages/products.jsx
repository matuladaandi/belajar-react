import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header />
        <CardProduct.Body />
        <CardProduct.Footer />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;

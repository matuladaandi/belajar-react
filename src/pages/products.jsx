import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/kursi-tua.jpg" />
        <CardProduct.Body title="kursi tua">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas, perspiciatis blanditiis ad ipsam impedit!
        </CardProduct.Body>
        <CardProduct.Footer price="99k" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/kursi-tua.jpg" />
        <CardProduct.Body title="kursi Baru">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit
        </CardProduct.Body>
        <CardProduct.Footer price="712k" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;

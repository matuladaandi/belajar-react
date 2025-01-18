import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;

  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2">
      {children}
    </div>
  );
};

const Header = () => {
  return (
    <a href="#">
      <img
        src="/images/kursi-tua.jpg"
        alt="kursi tua"
        className="p-8 rounded-t-lg"
      />
    </a>
  );
};

const Body = () => {
  return (
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          Kursi Bekas
        </h5>
        <p className="text-s text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
          eligendi libero minus odit saepe exercitationem voluptas dolor esse
          voluptatibus ut?
        </p>
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex items-center justify-between px-5  pb-5">
      <span className="text-xl font-bold text-white">Rp. 100.000</span>
      <Button className="bg-blue-600">Add to Card</Button>
    </div>
  );
};

// Jadi CardProduct itu memiliki property Header yg di isi oleh function Header bgitu jg dgn Body,Footer
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;

const CartProductCard = ({ product }) => {
  return (
    <>
      <div className="checkout-products flex items-center gap-4 px-2 py-4">
        <figure className="w-14">
          <img className="w-full" src={product.image} alt={product.imgAlt} />
        </figure>
        <div className="product-details flex flex-row justify-between items-center w-full">
          <div className="left flex flex-col w-full">
            <p className="text-back ">{product.name}</p>
            <p className="text-14px text-black opacity-80">
              Quantity: {product.quantity}
            </p>
          </div>
          <p className="text-black font-semiBold">${product.subTotal}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartProductCard;

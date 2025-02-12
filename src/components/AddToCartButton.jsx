const AddToCartButton = (props) => {
  const addToCart = (props) => {
    let newCart = [...props.cart];
    const index = newCart.findIndex(el => el.product.id === props.product.id);
    if (index === -1) {
      newCart = [...props.cart, {product: props.product, quantity: 1}];
    } else {
      newCart[index].quantity += 1;
    }
    props.setCart(newCart);
  };
  return (
    <button className={props.class} onClick={() => addToCart(props)}>{props.text}</button>
  );
};

export default AddToCartButton;
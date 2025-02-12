const RemoveFromCartButton = (props) => {
  const removeFromCart = (props) => {
    let newCart = [...props.cart];
    const index = newCart.findIndex(el => el.product.id === props.product.id);
    if (index != -1) {
      newCart[index].quantity -= 1;
      if (newCart[index].quantity === 0) {newCart.splice(index, 1)};
    }
    props.setCart(newCart);
  };
  return (
    <button className={props.class} onClick={() => removeFromCart(props)}>{props.text}</button>
  );
};

export default RemoveFromCartButton;
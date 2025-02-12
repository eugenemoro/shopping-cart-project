import { useOutletContext, Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import RemoveFromCartButton from './RemoveFromCartButton';
import styles from './ShoppingCart.module.css';

const ShoppingCart = () => {
  const [cart, setCart] = useOutletContext();
  const products = [...cart];

  const totalQuantity = products.reduce((acc, el) => acc + el.quantity, 0);
  const totalSum =
    Math.round(
      products.reduce((acc, el) => acc + el.product.price * el.quantity, 0) *
        100
    ) / 100;

  return (
    <div className={styles.cart}>
      {products.map((item) => (
        <div className={styles.productCardCart} key={item.product.id}>
          <div className={styles.imgCartItem}>
            <img
              src={item.product.image}
              alt={item.product.description}
            />
          </div>
          <div className={styles.productCardCartText}>
            <Link to={`/product/${item.product.id}`}>
              <h2 className="product-title">{item.product.title}</h2>
            </Link>
            <p>Category: {item.product.category}</p>
            <p>Description: {item.product.description}</p>
            <p>
              Rating: ⭐{item.product.rating.rate}/5 (
              {item.product.rating.count} reviews)
            </p>
            <div className={styles.quantityOperation}>
              <RemoveFromCartButton
                class="removeFromCartBtnCartPage"
                product={item.product}
                cart={cart}
                setCart={setCart}
                text={
                  item.quantity === 1 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="18px"
                      viewBox="0 -960 960 960"
                      width="18px"
                      fill="white"
                    >
                      <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                  ) : (
                    "-"
                  )
                }
              />
              <h2>
                {cart.find((el) => el.product.id === item.product.id).quantity}
              </h2>
              <AddToCartButton
                class="addToCartBtn"
                product={item.product}
                cart={cart}
                setCart={setCart}
                text="+"
              />
            </div>
          </div>
          <div className={styles.productCardCartPrice}>
            <h3>
              $<strong>{item.product.price}</strong>
            </h3>
          </div>
        </div>
      ))}
      <div className={styles.cartTotal}>
        <h2>
          Subtotal ({totalQuantity} item{totalQuantity > 1 && 's'}): ${totalSum}
        </h2>
      </div>
    </div>
  );
};

export default ShoppingCart;

import { useParams, useOutletContext } from 'react-router-dom';
import FetchProduct from './FetchProduct';
import AddToCartButton from './AddToCartButton';
import { useRef } from 'react';
import styles from './Product.module.css';
import RemoveFromCartButton from './RemoveFromCartButton';

const Product = () => {
  const [cart, setCart] = useOutletContext();
  const { id } = useParams();
  const product = useRef([]);

  const newProduct = FetchProduct(id);
  newProduct && (product.current = newProduct);

  console.log(cart)
  console.log(id)
  const cartIndex = cart.findIndex((el) => el.product.id == id);
  console.log(cartIndex)

  if (product.current.length != 0)
    return (
      <div className={styles.productCardDetailed} key={product.current.id}>
        <div className={styles.imgSectionProduct}>
          <img src={product.current.image} alt={product.current.description} />
        </div>
        <div>
          <h2 className="product-title">{product.current.title}</h2>

          <p>Category: {product.current.category}</p>
          <p>Description: {product.current.description}</p>
          <p>
            Price: $<strong>{product.current.price}</strong>
          </p>
          <p>
            Rating: ⭐{product.current.rating.rate}/5 (
            {product.current.rating.count} reviews)
          </p>
          <div className={styles.quantityOperation}>
            {cartIndex === -1 && (
              <AddToCartButton
                class="addToCartBtn"
                product={newProduct}
                cart={cart}
                setCart={setCart}
                text="Add to cart"
              />
            )}
            {cartIndex !== -1 && (
              <>
                <RemoveFromCartButton
                  class="removeFromCartBtnCartPage"
                  product={cart[cartIndex].product}
                  cart={cart}
                  setCart={setCart}
                  text={
                    cart[cartIndex].quantity === 1 ? (
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
                      '-'
                    )
                  }
                />
                <h2>{cart[cartIndex].quantity}</h2>
                <AddToCartButton
                  class="addToCartBtn"
                  product={cart[cartIndex].product}
                  cart={cart}
                  setCart={setCart}
                  text="+"
                />
              </>
            )}
          </div>
        </div>
      </div>
    );
};

export default Product;

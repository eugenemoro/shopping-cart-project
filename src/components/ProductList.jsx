import { useParams, Link, useOutletContext } from 'react-router-dom';
import FetchProducts from './FetchProducts';
import { useRef } from 'react';
import AddToCartButton from './AddToCartButton';
import RemoveFromCartButton from './RemoveFromCartButton';
import styles from './ProductList.module.css';

const ProductList = () => {
  const [cart, setCart] = useOutletContext();

  const { id } = useParams();
  const products = useRef([]);

  const newProducts = FetchProducts(id);
  newProducts && (products.current = [...newProducts]);

  return (
    <div className={styles.products}>
      {products.current.map((product) => (
        <div className={styles.productCard} key={product.id}>
          <div className={styles.imgSection}>
            <Link
              className={styles.imgProductCard}
              to={`/product/${product.id}`}
            >
              <img src={product.image} alt={product.description} />
            </Link>
          </div>
          <div className={styles.textProductCard}>
            <div>
              <Link to={`/product/${product.id}`}>
                <h2 className="product-title">
                  {product.title.length > 40
                    ? product.title.substring(0, 40) + '...'
                    : product.title}
                </h2>
              </Link>
              <p>Category: {product.category}</p>
              <p>
                Price: $<strong>{product.price}</strong>
              </p>
              <p >
                Rating: ⭐{product.rating.rate}/5 ({product.rating.count}{' '}
                reviews)
              </p>
            </div>
            <div className={styles.btnProductCard}>
              <AddToCartButton
                class="addToCartBtn"
                product={product}
                cart={cart}
                setCart={setCart}
                text="Add to cart"
              />
              <div
                className={
                  !cart.find((el) => el.product.id === product.id)
                    ? styles.btnHidden
                    : styles.btnVisible
                }
              >
                <div className="triggeredBtn">
                  <p>
                    <span className={styles.smallText}>
                      {cart.length != 0 &&
                        cart.find((el) => el.product.id === product.id) &&
                        cart.find((el) => el.product.id === product.id)
                          .quantity}{' '}
                      in <Link className={styles.smallCartLink} to="/cart/">Cart</Link>
                    </span>
                    <RemoveFromCartButton
                      class="removeFromCartBtn"
                      product={product}
                      cart={cart}
                      setCart={setCart}
                      text="Remove"
                    />
                  </p>  
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

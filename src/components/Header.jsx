import { useRef } from 'react';
import FetchCategories from './FetchCategories';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {
  const cart = props.cart;
  const categories = useRef([]);

  let newCategories = FetchCategories();
  newCategories && (categories.current = newCategories);

  return (
    <header className={styles.topMenu}>
      <ul className={styles.categories}>
        <li key="home">
          <Link to={'./'}>HOME</Link>
        </li>
        {categories.current.map((category) => (
          <li key={category}>
            <Link to={'/category/' + category}>{category.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
      <div>
        <p>
          <Link to="/cart/">
            <div className={styles.cartHeader}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="white"
              >
                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
              </svg>
              <span>
                {' '}
                {cart.length === 0
                  ? 0
                  : cart.reduce((acc, item) => acc + item.quantity, 0)}{' '}
                items
              </span>
            </div>
          </Link>
        </p>
      </div>
    </header>
  );
};

export default Header;

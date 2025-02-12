import { useState } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className={styles.container}>
      <Header cart={cart}/>
      <div className={styles.content}>
        <Outlet context={[cart, setCart]}/>
      </div>
    </div>
  );
};

export default App;

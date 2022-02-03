import React, {useState} from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {

  const [CartIsShown, setCartIsShown] = useState(false);

  const showCart = () => {
    setCartIsShown(true);
  }
  const hideCart = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {CartIsShown && <Cart onCloseCart={hideCart}/>}
      <Header onShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

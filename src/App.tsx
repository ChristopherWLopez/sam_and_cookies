import React from 'react';
import './App.css';
import { CookieTable, CookieStand } from './components/CookieTable';


function App() {
  const stores: CookieStand[] = [
    new CookieStand("Seattle", 23, 65, 6.3),
    new CookieStand("Tokyo", 3, 24, 1.2),
    new CookieStand("Dubai", 11, 38, 3.7),
    new CookieStand("Paris", 20, 38, 2.3),
    new CookieStand("Lima", 2, 16, 4.6),

  ];
  return (
      <>
      <header> Sam And Cookies</header>
      <CookieTable stores={stores}/>
      </>
  )
}

export default App;

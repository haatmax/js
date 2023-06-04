import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { sampleProducts } from './data';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>haatmaxbd.com</header>
      <main>
        <ul>
          {sampleProducts.map((product) => (
            <li key={product.slug}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h2>{product.name}</h2>
              <p>৳{product.price}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer>All right reserved</footer>
    </div>
  );
}

export default App;

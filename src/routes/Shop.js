import { useState } from "react";
import ShopTable from "../components/ShopTable";
import { Link } from "react-router-dom";

//read-only
const data = [
  { id: 0,
    name: "Smudge",
    price: 399,
  },
  { id: 1,
    name: "Luna",
    price: 299,
  },
  { id: 2,
    name: "Edie",
    price: 10000,
  },
  { id: 3,
    name: "Rain",
    price: 745,
  },
  { id: 4,
    name: "Dog",
    price: 230,
  },
  { id: 5,
    name: "Scrags",
    price: 100,
  },
  { id: 6,
    name: "Nega-Cat",
    price: -777,
  },
];

//state
const initStock = [4, 8, 1, 2, 6, 15, 99];
const initCart = [0, 0, 0, 0, 0, 0, 0];

const Shop = () => {
  const [stock, setStock] = useState(initStock);
  const [cart, setCart] = useState(initCart);

  const buy = (id, quantity) => {
    let available = stock[id];
    let bought = Math.min(available, quantity);
    let newStock = stock.slice();
    let newCart = cart.slice();
    newStock[id] -= bought;
    newCart[id] += bought;
    setStock(newStock);
    setCart(newCart);
  }

  const cancel = (id, quantity) => {
    let available = cart[id];
    let cancelled = Math.min(available, quantity);
    let newStock = stock.slice();
    let newCart = cart.slice();
    newStock[id] += cancelled;
    newCart[id] -= cancelled;
    setStock(newStock);
    setCart(newCart);
  }

  return (
    <div>
      <h1>Shopping</h1>
      <p>See following table for items and prices: </p>
      <ShopTable data={data} available={stock} btnText="Buy" btnFunc={buy} />
      <p>Your cart:</p>
      <ShopTable data={data} available={cart} btnText="Cancel" btnFunc={cancel} />
      <p>Total price:</p>
      <p>£0.00</p>
      {/* <button onClick={() => buy(0, 3)}>Buybuybuyb</button> */}
      <Link to="/success_shop" class="no-left"><button>Go to checkout</button></Link>
    </div>
  )
}

export default Shop
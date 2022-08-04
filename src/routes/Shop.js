import { useState } from "react";
import { Link } from "react-router-dom";

import ShopTable from "../components/ShopTable";
import ShopModal from "../components/ShopModal";

const showPrice = price => {
  let str = price.toString();
  str = "0".repeat(Math.max(3 - str.length, 0)) + str;
  let first = str.slice(0, -2);
  let second = str.slice(-2);
  let result = "£" + first;
  if (second !== "00") {
    result = result + ("." + second);
  }
  return result;
}

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

  const [modalVisible, setModalVisible] = useState(false);
  const [modalBuy, setModalBuy] = useState(true);
  const [modalId, setModalId] = useState(0);
  const [modalQuantity, setModalQuantity] = useState(1);

  const buy = (id, quantity) => {
    let available = stock[id];
    let bought = Math.min(available, quantity);
    let newStock = stock.slice();
    let newCart = cart.slice();
    newStock[id] -= bought;
    newCart[id] += bought;
    setStock(newStock);
    setCart(newCart);
    setModalQuantity(1);
    setModalVisible(false);
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
    setModalQuantity(1);
    setModalVisible(false);
  }

  const showModal = buy => id => {
    setModalBuy(buy);
    setModalId(id);
    setModalVisible(true);
  }

  return (
    <div>
      <h1>Shopping</h1>
      <p>See following table for items and prices: </p>
      <ShopTable data={data} available={stock} btnText="Buy" showModal={showModal(true)}/>
      <p>Your cart:</p>
      <ShopTable data={data} available={cart} btnText="Cancel" showModal={showModal(false)}/>
      <p>Total price:</p>
      <p>{showPrice(cart.map((quantity, id) => data.find(elem => elem.id === id).price * quantity).reduce((prev, next) => prev + next))}</p>
      <Link to="/success_shop" className="no-left"><button>Go to checkout</button></Link>

      <ShopModal 
        modalVisible={modalVisible} 
        modalBuy={modalBuy} 
        modalId={modalId} 
        buy={buy} 
        cancel={cancel} 
        hideSelf={() => {setModalVisible(false)}} 
        data={data} 
        modalQuantity={modalQuantity} 
        setModalQuantity={setModalQuantity}
      />

    </div>
  )
}

export default Shop
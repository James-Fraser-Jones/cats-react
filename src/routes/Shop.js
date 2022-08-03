const data = [
  { name: "Smudge",
    price: 399,
    quantity: 4,
  },
  { name: "Luna",
    price: 299,
    quantity: 8,
  },
  { name: "Edie",
    price: 10000,
    quantity: 1,
  },
  { name: "Rain",
    price: 745,
    quantity: 2,
  },
  { name: "Dog",
    price: 230,
    quantity: 6,
  },
  { name: "Scrags",
    price: 100,
    quantity: 15,
  },
  { name: "Nega-Cat",
    price: -777,
    quantity: 99,
  },
];

const Shop = () => {
  return (
    <div>
      <h1>Shopping</h1>
      <p>See following table for items and prices: </p>
      {/* pricing table */}
      <p>Your cart:</p>
      {/* cart table */}
      <p>Total price:</p>
      {/* total */}
    </div>
  )
}

export default Shop
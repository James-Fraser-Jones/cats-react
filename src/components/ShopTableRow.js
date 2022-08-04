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

const getValues = obj => Object.entries(obj).slice(1).map(([_, value], index) => index === 1 ? showPrice(value) : value);

const ShopTableRow = ({ id, row, available, btnText, showModal }) => { 

  if (available === 0){
    return null;
  }
  return (
    <tr>
      {getValues(row).map((cell, index) => <td key={index}>{cell}</td>)}
      <td>{available}</td>
      <td><button onClick={() => showModal(id)}>{btnText}</button></td>
    </tr>
  )
}

export default ShopTableRow
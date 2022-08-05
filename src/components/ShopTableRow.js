import { showPrice } from "../utils";

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
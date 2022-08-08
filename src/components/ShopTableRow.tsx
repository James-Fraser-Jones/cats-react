import { showPrice } from "../utils";

const ShopTableRow = ({ id, row, available, btnText, showModal }: {
  id: number,
  row: {
      id: number;
      name: string;
      price: number;
  },
  available: number,
  btnText: string,
  showModal: (id: number) => void
}) => {

  const getValues = (obj: typeof row) => Object.entries(obj).slice(1).map(([_, value], index) => index === 1 ? showPrice(value as number) : value);

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
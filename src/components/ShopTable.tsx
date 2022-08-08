import ShopTableHeader from "./ShopTableHeader"
import ShopTableRow from "./ShopTableRow"

const ShopTable = ({ data, available, btnText, showModal }: {
  data: {
      id: number;
      name: string;
      price: number;
  }[],
  available: number[],
  btnText: string,
  showModal: (id: number) => void,
}) => {
  return (
    <table>
      <thead>
        <ShopTableHeader row={data[0]}/>
      </thead>
      <tbody>
        {data.map((row, index: number) => <ShopTableRow key={row.id} id={row.id} row={row} available={available[index]} btnText={btnText} showModal={showModal}/>)}
      </tbody>
    </table>
  )
}

export default ShopTable
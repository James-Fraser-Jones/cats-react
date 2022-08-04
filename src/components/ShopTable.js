import ShopTableHeader from "./ShopTableHeader"
import ShopTableRow from "./ShopTableRow"

const ShopTable = ({ data, available, btnText, btnFunc }) => {
  return (
    <table>
      <thead>
        <ShopTableHeader row={data[0]}/>
      </thead>
      <tbody>
        {data.map((row, index) => <ShopTableRow key={row.id} id={row.id} row={row} available={available[index]} btnText={btnText} btnFunc={btnFunc}/>)}
      </tbody>
    </table>
  )
}

export default ShopTable
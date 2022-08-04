const getKeys = obj => Object.entries(obj).slice(1).map(([key, _]) => key);

const ShopTableHeader = ({ row }) => {
  return (
    <tr>
      {getKeys(row).map((key, index) => <th key={index}>{key}</th>)}
      <th>quantity</th>
      <th></th>
    </tr>
  )
}

export default ShopTableHeader
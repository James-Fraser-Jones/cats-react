const ShopTableHeader = ({ row }: {
  row: {
      id: number;
      name: string;
      price: number;
  },
}) => {

  const getKeys = (obj: typeof row) => Object.entries(obj).slice(1).map(([key, _]) => key);

  return (
    <tr>
      {getKeys(row).map((key, index) => <th key={index}>{key}</th>)}
      <th>quantity</th>
      <th></th>
    </tr>
  )
}

export default ShopTableHeader
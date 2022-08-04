const ShopModal = ({ modalVisible, modalBuy, modalId, buy, cancel, hideSelf, data, modalQuantity, setModalQuantity }) => {
  const itemName = data.find(row => row.id === modalId).name;
  const header = (modalBuy ? "Buying" : "Cancelling") + " " + itemName;

  return (
    <div className={"modal" + (modalVisible ? "" : " hide")}>
      <div>
        <h4>{header}</h4>
        <label>Quantity:</label><br/>
        <input type="number" value={modalQuantity} onChange={(event) => setModalQuantity(event.target.value)}/><br/><br/>
        <button onClick={hideSelf}>Close</button>
        <button onClick={() => modalBuy ? buy(modalId, modalQuantity) : cancel(modalId, modalQuantity)} className="button-right">Ok</button>
      </div>
    </div>
  )
}

export default ShopModal
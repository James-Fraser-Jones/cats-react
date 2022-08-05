const ShopModal = ({ modalVisible, modalBuy, modalId, buy, cancel, hideSelf, data, modalQuantity, setModalQuantity }) => {
  const itemName = data.find(row => row.id === modalId).name;
  const header = (modalBuy ? "Buying" : "Cancelling") + " " + itemName;

  const handleQuantityChange = event => {
    let newQuantity = event.target.value;
    setModalQuantity(newQuantity);
  }

  return (
    <div className={"modal" + (modalVisible ? "" : " hide")}>
      <div>
        <h4>{header}</h4>
        <label>Quantity:</label><br/>
        <input type="number" value={modalQuantity} onChange={handleQuantityChange}/><br/><br/>
        <button onClick={hideSelf}>Close</button>
        <button 
          onClick={() => modalBuy ? buy(modalId, modalQuantity) : cancel(modalId, modalQuantity)} 
          className="button-right" 
          disabled={modalQuantity < 1}
        >
          Ok
        </button>
      </div>
    </div>
  )
}

export default ShopModal
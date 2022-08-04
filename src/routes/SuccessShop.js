import { Link } from "react-router-dom";

const SuccessShop = () => {
  return (
    <div>
      <h1>Purchase Sucessful!</h1>
      <p>Thanks for shopping at the cat website. :)</p>
      <Link to="/" id="home">Home</Link>
    </div>
  )
}

export default SuccessShop
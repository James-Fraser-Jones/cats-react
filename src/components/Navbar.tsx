import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/" className="no-left">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/mailing">Mailing List</Link>
      <Link to="/shop">Shopping</Link>
      <Link to="/history">History</Link>
    </div>
  )
}

export default Navbar
const Navbar = () => {
    return(
    <div className="navbar">
      <div className="'icon">
        <h2 className="logo">Doctor AS</h2>
      </div>
  
        <div className="menu">
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#"><span>BOOK APPOINTMENT</span></a></li>
                <li><a href="#">VIEW APPOINTMENT</a></li>
                <li><a href="#">CANCEL BOOKING</a></li>
                <li><a href="#">FEEDBACK</a></li>
                <li><a href="#">LOGOUT</a></li>
            </ul>
        </div>
    </div>
    )
  }

export default Navbar;
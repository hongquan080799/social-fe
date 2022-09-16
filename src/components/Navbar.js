import iconImage from '../assests/user-icon.jpg'



export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <div className="navbar_logo-icon">
            <i className="fa-brands fa-facebook"></i>
        </div>
        <h5>Facebook</h5>
      </div>
      <div className="navbar_search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input placeholder="Search on facebook" />
      </div>
      <div className="navbar_util">
        <i className="fas fa-comments"></i>
        <i className="fas fa-bell"></i>
        <div class="navbar_util-icon-user">
          <img layout='fill' src={iconImage} alt = 'user'/>
        </div>
      </div>
    </div>
  )
}

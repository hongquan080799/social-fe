import iconImage from '../assests/user-icon.jpg'

export default function LeftSideBar() {
  return (
    <div className="side-bar-left">
        <ul className="side-bar-left_list">
            <li className = "side-bar-left_item">
                <div className="side-bar-left-icon-user">
                    <img  src={iconImage} alt ="icon" />
                </div>
                <p>Tran Hong Quan</p>
            </li>
            <li className = "side-bar-left_item">
                <i className="fa-solid fa-user-group"></i>
                <p>Friends</p>
            </li>
            <li className = "side-bar-left_item">
                <i className="fa-solid fa-people-group"></i>
                <p>Groups</p>
            </li>
            <li className = "side-bar-left_item">
                <i className="fa-solid fa-shop"></i>
                <p>Marketplace</p>
            </li>
            <li className = "side-bar-left_item">
                <i className="fa-solid fa-tv"></i>
                <p>Watch</p>
            </li>
            <li className = "side-bar-left_item">
                <i className="fa-solid fa-calendar-days"></i>
                <p>Events</p>
            </li>
            <li className = "side-bar-left_item">
                <i className="fa-solid fa-clock"></i>
                <p>Memories</p>
            </li>
            <li className = "side-bar-left_item">
                <i className="fa-sharp fa-solid fa-angle-down"></i>
                <p>See more</p>
            </li>
        </ul>
    </div>
  )
}

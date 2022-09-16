import iconImage from '../assests/user-icon.jpg'
export default function RightSideBar() {
  return (
    <div className="side-bar-right">
        <ul className="side-bar-right_list">
            <li className = "side-bar-right_item">
                <div className="side-bar-right-icon-user">
                    <img src={iconImage} alt="icon"/>
                    <div className="side-bar-right-icon-user-status"></div>
                </div>
                <p>Trần Hồng Quân</p>
            </li>
        </ul>
    </div>
  )
}

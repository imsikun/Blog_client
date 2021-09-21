import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'> 
        <div className="sidebarItem">
          <span className="sidebarTitle">
            ABOUT ME
          </span>
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perspiciatis obcaecati temporibus voluptatem, cumque a eaque atque dolorum tenetur reprehenderit.</p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">
            CATEGORIES
          </span>
          <ui className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
          </ui>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">
            Follow Us
          </span>
          <div className="sidebarSocial">
          <i className='sidebarIcon fab fa-facebook-f'></i>
          <i className='sidebarIcon fab fa-instagram'></i>
          <i className='sidebarIcon fab fa-twitter'></i>
          <i className='sidebarIcon fab fa-pinterest'></i>
          </div>

        </div>
    </div>
  )
}

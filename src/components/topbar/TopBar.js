import './topbar.css'

export default function TopBar () {
  return (
    <div>
      <div className='top'>
        <div className='topLeft'>
          <i className='topIcon fab fa-facebook-f'></i>
          <i className='topIcon fab fa-instagram'></i>
          <i className='topIcon fab fa-twitter'></i>
          <i className='topIcon fab fa-pinterest'></i>
        </div>
        <div className='topCenter'>
          <ul className='topList'>
            <li className='topListItem'>HOME</li>
            <li className='topListItem'>ABOUT</li>
            <li className='topListItem'>CONTACT</li>
            <li className='topListItem'>WRITE</li>
            <li className='topListItem'>LOGOUT</li>
          </ul>
        </div>
        <div className='topRight'>
          <img
            className='topImg'
            src='https://images.pexels.com/photos/3310693/pexels-photo-3310693.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            alt=''
          />

          <i className='topSearchIcon fas fa-search'></i>
        </div>
      </div>
    </div>
  )
}

import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
        <Link style={{ padding: '20px' }} to='/' >Home</Link>
        <Link style={{ padding: '20px' }} to='/User' >User</Link>
        <Link style={{ padding: '20px' }} to='/Navbar' >Navbar</Link>
        <Link style={{ padding: '20px' }} to='/Product' >Product</Link>
        <Link style={{ padding: '20px' }} to='/ProductDetail' >ProductDetail</Link>
        </nav>
    </div>
  )
}

export default Navbar
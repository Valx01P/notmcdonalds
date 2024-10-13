import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='p-10 flex justify-between header align-middle text-white'>
        <h1 className='text-5xl font-bold'>ShitDonalds 🍔</h1>
        <ul className='flex font-bold gap-20 text-3xl pr-10'>
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/orders/new'>New Order</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Header
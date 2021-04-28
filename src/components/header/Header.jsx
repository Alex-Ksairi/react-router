// importing LinkRouter
import { Link } from '../../../node_modules/react-router-dom';

export default function Header(props) {
    return (
        <div>
            <header>
                <div className="nav">
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/services'>Services</Link>
                    <Link className='link' to='/join-us'>Join us</Link>
                    <Link className='link' to='/contact'>Contact</Link>
                </div>
            </header>
            {props.children}
        </div>
    )
}

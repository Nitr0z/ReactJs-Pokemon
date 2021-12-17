import { Link } from 'react-router-dom';

function Header(){
    return(
    <div className='header'>
        <div>
            <Link className="link" to="/">Data Pokemon</Link>
            <Link className="link" to="/Api">Api</Link>
            </div>
            </div>
            )
        }

export default Header
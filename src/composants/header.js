import { Link } from 'react-router-dom';

function Header(){
    return(
    <div className='liste'>
        <div>
            <Link className="items" to="/">Data Pokemon</Link>
            <Link className="items" to="/Api">Api</Link>
            </div>
            </div>
            )
        }

export default Header
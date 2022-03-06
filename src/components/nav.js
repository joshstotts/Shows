import { Link } from 'react-router-dom';

function Nav () {
    return (
        <div>
            <Link to='/'>
                <div>Watch List</div>
            </Link>
        </div>
    );
}

export default Nav;
import {Link} from 'react-router-dom';

const Nav = () => {
    <div>
        <Link to = {'/candies/create'}>Add Candy</Link>
        <Link to = {'/candies'}>Display Candies</Link>
    </div>
};

export default Nav;
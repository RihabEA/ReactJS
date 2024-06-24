import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/linkedList">Linked List</Link></li>
                <li><Link to="/tree">Tree</Link></li>
                <li><Link to="/reactQuery">React Query</Link></li>
                <li><Link to="/zustandExample">Zustand Example</Link></li>
                <li><Link to="/table">React Table</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
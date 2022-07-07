import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <>
        <div className="nav-container">
                <div className="row">
                    <div className="col-12">
                        <nav className="nav">
                            <NavLink to="/" className="nav-link" style={
                                ({ isActive }) =>
                                    isActive ? {
                                        color: 'crimson'
                                    } : null
                            }>User</NavLink>
                            <NavLink to="/admin" className="nav-link" style={
                                ({ isActive }) =>
                                    isActive ? {
                                        color: 'crimson'
                                    } : null
                            }>Admin</NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Nav;
import React from "react"
import { NavLink, Outlet} from "react-router-dom"

function Navigation() {
    return (
        <div className="container">
            <div className="navigation">
                <nav>
                    <NavLink to=''>Home</NavLink>
                    <NavLink to='/newPost'>Add New Post</NavLink>
                    <NavLink to='/about'>About</NavLink>
                </nav>
            </div>
            <Outlet />
        </div>
    )
}

export default Navigation
import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Header() {
	
    return (
        <div className="header">
						<div className="logo">
							<h2 className="logo__title">easysnap</h2>
						</div>
						<div className="header_menu">
							<NavLink to="/" exact={true}>Snaps</NavLink>
							<NavLink to="/login">Login</NavLink>
							<NavLink to="/join">Join</NavLink>
						</div>
					</div>
    )
}

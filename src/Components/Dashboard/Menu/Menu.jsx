import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Menu.css'


// Dashboard Menu Components
const Menu = () => {
    const { url } = useRouteMatch();
    const { user, admin } = useAuth();

    return (
        <>
            <div className="dashboardMenu">
                <h3 className='my-4'>DashBoard Menu</h3>

                <Link className="nav-link" to={`${url}/Mytour`}>My Tours Vlog</Link>

                {
                    user.email && admin ?
                        <span>
                            <Link className="nav-link" to={`${url}/admintour`}>Admin Tour Experience</Link>
                            <Link className="nav-link" to={`${url}/Managetour`}>Manage Tour</Link>
                            <Link className="nav-link" to={`${url}/createAdmin`}>Create an Admin</Link>
                        </span>
                        : <Link className="nav-link" to={`${url}/addTour`}>Add a Tour Experience </Link>
                }

            </div>
        </>
    );
};

export default Menu;
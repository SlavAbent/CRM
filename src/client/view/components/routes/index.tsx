import { Link } from 'react-router-dom';
import React from 'react';
import { routesList } from './routesList';

export const Links = () => {
    return (
        <div>
            { routesList.map((route) => {
                const {id, title, icon, href} = route

                return <Link key={`${id}_${href}`} to={href}>
                    {icon}
                    {title}
                </Link>
            })}
        </div>
    );
};
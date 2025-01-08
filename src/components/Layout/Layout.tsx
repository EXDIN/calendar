import React from 'react'
import { Outlet } from 'react-router-dom'
import { LayoutDiv } from './Layout.styles';


const Layout: React.FC = () => {
    return (
        <LayoutDiv>
            <Outlet />
        </LayoutDiv>
    )
}


export default Layout;

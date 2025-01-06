import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from "@stitches/react";


const MyDiv = styled("div", {
    minHeight: "100vh",
    background: 'rgb(220, 219, 218)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})


const Layout: React.FC = () => {
    return (
        <MyDiv>
            <Outlet />
        </MyDiv>
    )
}


export default Layout

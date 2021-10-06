import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function Layout(props) {
    return (
        <div>
            <Header />
            <Sidebar />
            {props.children}
        </div>
    )
}

export default Layout

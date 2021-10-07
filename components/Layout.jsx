import React from 'react'
import Header from './Header'
import { withTheme } from "../components/Theme";

function Layout(props) {
    return (
        <div>
            <Header />
            {/* <Sidebar /> */}
            {/* <Button color="secondary">MUI button</Button> */}
            {props.children}
        </div>
    )
}

export default withTheme(Layout)

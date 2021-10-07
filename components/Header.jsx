import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import styled from 'styled-components'
import { Box } from '@mui/system'
import React from 'react'

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div">
                    <strong>Fit</strong>me
                </Typography>
                <Button color="inherit">User Name</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header

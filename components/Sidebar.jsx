import { Drawer, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

function Sidebar() {
    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{ bgcolor: 'red' }}
        >
            <List>
                <ListItem button>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="About" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Contact" />
                </ListItem>
            </List>
        </Drawer>
    )
}

export default Sidebar

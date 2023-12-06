import React from 'react'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Divider } from '@mui/material';
import "../../assets/admin/AdminLeftMenu.css";


const AdminLeftMenu: React.FC = () => {
    return (
        <div className="left-menu-container">
            サイドメニューです。
            <List className="menu-items">
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Label" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Label2" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Label3" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Label4" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Label5" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Label6" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Label7" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Label8" />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    )
}

export default AdminLeftMenu;

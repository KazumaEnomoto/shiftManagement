import React from 'react';
import AdminHeader from './components/admin/AdminHeader';
import AdminLeftMenu from './components/admin/AdminLeftMenu';

const AppAdmin: React.FC = () => {
    return (
        <div className="app-admin">
            <AdminHeader />
            <AdminLeftMenu />
        </div>
    )
}

export default AppAdmin;
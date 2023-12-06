import React from 'react'
import { Button } from '@mui/material';
import '../../assets/admin/AdminHeader.css'

const AdminHeader: React.FC = () => {
    return (
        <div className="admin-header">
            <div>ヘッダーのタイトル</div>
            <Button variant="contained" size="small">ログアウト</Button>
        </div>
    )
}

export default AdminHeader;
import React from 'react'
import { Button } from '@mui/material';
import '../../assets/admin/AdminHeader.css'

const AdminHeader: React.FC = () => {
    return (
        <div className="admin-header">
            <div>ヘッダーのタイトル</div>
            <div className="button-container">
                <Button variant="contained" size="small">会員登録</Button>
                <Button variant="contained" size="small">ログアウト</Button>
            </div>
        </div>
    )
}

export default AdminHeader;
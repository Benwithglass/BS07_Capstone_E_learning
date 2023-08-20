import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import './AdminLayout.css'
import { Button } from 'antd/es/radio';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem(<NavLink to="/admin/quanlynguoidung">Quan lý người dùng</NavLink>, '1', <PieChartOutlined />),
    getItem(<NavLink to="/admin/quanlykhoahoc">Quản lý khóa học</NavLink>, '2', <DesktopOutlined />),
];
const AdminLayout = ({ Component }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div
                    style={{
                        height: 32,
                        margin: 16,
                    }}
                ><NavLink to="/" className='flex justify-center'>
                        <i className="las la-home w-10 h-10 bg-white text-black flex items-center justify-center rounded-lg text-xl hover:text-green-light"></i>
                    </NavLink>
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Component />
        </Layout>
    );
};
export default AdminLayout;
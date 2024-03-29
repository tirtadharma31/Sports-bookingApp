import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter,
    CDBBtn,
} from 'cdbreact';
import { NavLink, useNavigate } from 'react-router-dom';
// import './admin.css'

export const Sidebar = (props) => {
    let activeStyle = {
        color: "black",
        backgroundColor: "white"
    }

    let inActiveStyle = { color: "grey" }

    const { cbLogin } = props

    const navigation = useNavigate()
    const logoutHandler = () => {
        localStorage.clear()
        cbLogin(false)
        navigation('/')
    }

    return (
        <CDBSidebar textColor="#333" backgroundColor="#f0f0f0" maxWidth="200px">
            <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
                Admin Menu
            </CDBSidebarHeader>
            <CDBSidebarContent>
                <CDBSidebarMenu>
                    {/* <NavLink className="nav-link" to="/" style={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
                        <CDBSidebarMenuItem icon="book">Booking</CDBSidebarMenuItem>
                    </NavLink> */}
                    <NavLink className="nav-link" to="/courts" style={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
                        <CDBSidebarMenuItem icon="square">Court</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink className="nav-link" to="/members" style={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
                        <CDBSidebarMenuItem icon="user" iconType="solid">Member</CDBSidebarMenuItem>
                    </NavLink>
                    <CDBSidebarMenuItem>
                        <CDBBtn color="danger" circle={true}
                            style={{ color: "white", marginTop: "24px", marginLeft: "2px", width: "130px" }}
                            onClick={() => logoutHandler()}>LOGOUT</CDBBtn>
                    </CDBSidebarMenuItem>
                    {/* <NavLink className="nav-link disabled" to="/payments" style={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
                        <CDBSidebarMenuItem icon="credit-card" iconType="solid">Payment</CDBSidebarMenuItem>
                    </NavLink> */}
                </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter>
                <div className="p-2 mb-3 ms-1">
                    <img
                        alt="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/GS_logo_%28South_Korean_company%29.svg/2560px-GS_logo_%28South_Korean_company%29.svg.png"
                        width="60px"
                    />
                </div>
            </CDBSidebarFooter>
        </CDBSidebar>
    )
}
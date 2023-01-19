export const Navbar = (props) => {
    const { cbLogin } = props

    const logoutHandler = () => {
        localStorage.clear()
        cbLogin(false)
    }

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#461619" }}>
            <div className="container-fluid py-3">
                <div className="navbar-brand text-white">GOLDEN SPORTS CENTER</div>
                <div className="ms-auto me-4">
                    <ul className="nav nav-pills mb-2 mb-lg-0">
                        <li className="nav-item">
                            <div className="nav-link" style={{ color: "whitesmoke" }}>Home</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" style={{ backgroundColor: "#d56037", color: "#ebe3de", fontWeight: "bold" }}>Court</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">Booking</div>
                        </li>
                        <li className="nav-item">
                            <div onClick={() => { logoutHandler() }}
                                className="btn btn-outline-warning">Logout</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
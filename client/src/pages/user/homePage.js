import pic from "../../bg-homepage.jpg"

const HomePage = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#461619" }}>
                <div className="container-fluid py-3">
                    <div className="navbar-brand text-white" href="#">GOLDEN SPORTS CENTER</div>
                    <div className="ms-auto me-4">
                        <ul className="nav nav-pills mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: "whitesmoke" }}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ backgroundColor: "#d56037", color: "#ebe3de", fontWeight: "bold" }}>Court</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Booking</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <img src={pic} alt="..." width={"100%"} height={"600px"} style={{ objectFit: "cover" }} />
            <div className="py-4 px-4" style={{ backgroundColor: "#DEDEDC" }}>
                <h3 style={{ color: "#615355", fontWeight: "bold" }}>OUR FACILITIES</h3>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card Title">Card 1</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card Title">Card 1</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card Title">Card 1</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
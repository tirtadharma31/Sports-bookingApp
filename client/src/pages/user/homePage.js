import pic from "../../bg-homepage.jpg"
import { Navbar } from "../../components/Navbar"

const HomePage = (props) => {
    const { cbLogin } = props

    return (
        <>
            <Navbar cbLogin={cbLogin} />
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
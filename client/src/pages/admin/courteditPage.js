import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { CDBBox, CDBSidebarHeader } from "cdbreact"
import { editCourtData, findCourtData } from "../../fetchs/courtFetch"

export const EditCourt = () => {
    const [court, setCourt] = useState({
        id: "", courtName: "", type: "", image: null, price: 0
    })

    const params = useParams()
    useEffect(() => {
        let { courtId } = params
        findCourtData(courtId, result => { setCourt(result) })
    }, [params])

    if (court.image === null)
        setCourt({ ...court, image: "https://via.placeholder.com/150" })

    const navigation = useNavigate()
    const onFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('courtName', court.courtName)
        formData.append('type', court.type)
        formData.append('image', court.image);
        formData.append('price', court.price)

        editCourtData(formData, court.id, court.courtName)
        navigation('/courts')
    }

    // const submitHandler = async () => {
    //     // editCourtData(court)
    //     // navigation('/courts')
    //     console.log(court)
    // }

    return (
        <>
            <CDBBox backgroundColor="#f0f0f0" color="info">
                <CDBSidebarHeader>
                    Edit Court Page
                </CDBSidebarHeader>
                {/* <button onClick={() => submitHandler()}>tes</button> */}
            </CDBBox>
            <form className="p-4" onSubmit={onFormSubmit}>
                <div className="row mb-2">
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="courtName">Court Name</label>
                        <input type="text" id="courtName" className="form-control"
                            value={court.courtName}
                            onChange={(e) => { setCourt({ ...court, courtName: e.target.value }) }} />
                    </div>

                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="price">Booking Price</label>
                            <input type="text" id="price" className="form-control"
                                value={court.price}
                                onChange={(e) => { setCourt({ ...court, price: e.target.value }) }} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="courtType">Court Type</label>
                            <input type="text" id="courtType" className="form-control"
                                value={court.type}
                                onChange={(e) => { setCourt({ ...court, type: e.target.value }) }} />
                        </div>
                    </div>

                    <div className="form-outline mt-4">
                        <label className="form-label" htmlFor="image">Court Image</label>
                        <input type="file" id="image" className="form-control"
                            // value={court.image}
                            onChange={(e) => { setCourt({ ...court, image: e.target.files[0] }) }} />
                    </div>
                </div>

                <div className="row g-0 mt-4">
                    <div className="d-flex justify-content-end">
                        <Link className="col-sm-2 me-5 btn btn-danger"
                            to='/courts' type="button">Cancel</Link>
                        <button type="submit" className="col-sm-2 btn btn-primary">Save</button>
                    </div>
                </div>
            </form>
        </>
    )
}
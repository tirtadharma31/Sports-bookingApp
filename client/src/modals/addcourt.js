import { useState } from "react"
import { addCourtData } from "../fetchs/courtFetch"

export const AddCourt = () => {
    const [court, setCourt] = useState({
        courtName: "", type: "", imageFile: null, price: 0
    })

    const onFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('courtName', court.courtName)
        formData.append('type', court.type)
        formData.append('imageFile', court.imageFile);
        formData.append('price', court.price)

        addCourtData(formData)
    }


    const submitHandler = async () => {
        // await addCourtData(court)
        console.log('tes')
    }

    return (
        <>
            <div className="modal fade" id="addForm" data-bs-backdrop="static" data-bs-keyboard="false"
                aria-labelledby="addFormLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addFormLabel">Input Data Court</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {/* form */}
                        <form onSubmit={onFormSubmit}>
                            <div className="modal-body text-dark">
                                <div className="row mb-2">
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="courtName">Court Name</label>
                                        <input type="text" id="courtName" className="form-control"
                                            onChange={(e) => { setCourt({ ...court, courtName: e.target.value }) }} />
                                    </div>

                                    <div className="col">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="price">Booking Price</label>
                                            <input type="text" id="price" className="form-control"
                                                onChange={(e) => { setCourt({ ...court, price: e.target.value }) }} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="courtType">Court Type</label>
                                            <input type="text" id="courtType" className="form-control"
                                                onChange={(e) => { setCourt({ ...court, type: e.target.value }) }} />
                                        </div>
                                    </div>

                                    <div className="form-outline mt-4">
                                        <label className="form-label" htmlFor="image">Court Image</label>
                                        <input type="file" id="image" name="image" className="form-control"
                                            onChange={(e) => { setCourt({ ...court, imageFile: e.target.files[0] }) }} />
                                        {/* onChange={saveFile} /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { submitHandler() }}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
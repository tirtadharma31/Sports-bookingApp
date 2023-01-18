import { useState } from "react"
import { addMemberData } from "../fetchs/memberFetch"

export const AddMember = (props) => {
    const [member, setMember] = useState({
        name: "", phone: "", profileImage: "", userName: "", password: ""
    })

    const submitHandler = async () => {
        await addMemberData(member)
    }

    return (
        <>
            <div className="modal fade" id="addformMember" data-bs-backdrop="static" data-bs-keyboard="false"
                tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Input Data Member</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-dark">
                            {/* form */}
                            <form>
                                <div className="row mb-4">
                                    <div className="form-floating mb-3">
                                        <input type="text" id="memberName" className="form-control" placeholder="..."
                                            onChange={(e) => { setMember({ ...member, name: e.target.value }) }} />
                                        <label className="ms-2" htmlFor="memberName">Member Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" id="phone" className="form-control" placeholder="..."
                                            onChange={(e) => { setMember({ ...member, phone: e.target.value }) }} />
                                        <label className="ms-2" htmlFor="phone">Phone Number</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" id="username" className="form-control" placeholder="..."
                                            onChange={(e) => { setMember({ ...member, userName: e.target.value }) }} />
                                        <label className="ms-2" htmlFor="username">Username</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" id="password" className="form-control" placeholder="..."
                                            onChange={(e) => { setMember({ ...member, password: e.target.value }) }} />
                                        <label className="ms-2" htmlFor="password">Password</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { submitHandler() }}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
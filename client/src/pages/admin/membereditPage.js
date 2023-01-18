import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { CDBBox, CDBSidebarHeader } from "cdbreact"
import { editMemberData, findMemberData } from "../../fetchs/memberFetch"

export const EditMember = () => {
    const [member, setMember] = useState({
        id: "", name: "", phone: "", image: "", userName: "", password: ""
    })

    const params = useParams()
    useEffect(() => {
        let { memberId } = params
        findMemberData(+memberId, result => { setMember(result) })
    }, [params])

    if (member.image === null)
        setMember({ ...member, image: "https://via.placeholder.com/150" })


    const navigation = useNavigate()
    const submitHandler = async () => {
        await editMemberData(member)
        navigation('/members')
    }

    return (
        <>
            <CDBBox backgroundColor="#f0f0f0" color="info">
                <CDBSidebarHeader>
                    Edit Member
                </CDBSidebarHeader>
            </CDBBox>
            <form className="row p-4">
                <div className="row mb-2">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="name">Member Name</label>
                            <input type="text" id="name" className="form-control"
                                value={member.name}
                                onChange={(e) => { setMember({ ...member, name: e.target.value }) }} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="phone">Phone Number</label>
                            <input type="text" id="phone" className="form-control"
                                value={member.phone}
                                onChange={(e) => { setMember({ ...member, phone: e.target.value }) }} />
                        </div>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="username">Username</label>
                            <input type="text" id="username" className="form-control"
                                value={member.userName}
                                onChange={(e) => { setMember({ ...member, userName: e.target.value }) }} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input type="text" id="password" className="form-control"
                                value={member.password}
                                onChange={(e) => { setMember({ ...member, password: e.target.value }) }} />
                        </div>
                    </div>
                </div>

                <div className="row g-0 mt-4">
                    <div className="d-flex justify-content-end">
                        <Link className="col-sm-2 me-5 btn btn-danger"
                            to="/members" type="button">Cancel</Link>
                        <button type="button" className="col-sm-2 btn btn-primary" onClick={() => submitHandler()}>Save</button>
                    </div>
                </div>
            </form>
        </>
    )
}
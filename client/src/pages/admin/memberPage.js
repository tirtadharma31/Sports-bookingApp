import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { CDBBox, CDBSidebarHeader } from "cdbreact"

import { readMemberData, deleteMemberData, searchMemberData } from "../../fetchs/memberFetch"
import { AddMember } from "../../modals/addmember"

const MemberDataPage = () => {
    const [dataMember, setDataMember] = useState([])

    useEffect(() => {
        readMemberData(result => setDataMember(result))
    }, [])

    const [searchMember, setSearchMember] = useState('')
    const searchHandler = async () => {
        let capitalize = searchMember.split('')
        capitalize.splice(0, 1, capitalize[0].toUpperCase())
        let newSearch = capitalize.join('')

        await searchMemberData(newSearch, result => setDataMember(result))
    }

    const deleteHandler = async (memberId, memberName) => {
        await deleteMemberData(memberId, memberName)
    }

    return (
        <>
            <CDBBox backgroundColor="#f0f0f0" color="navy">
                <CDBSidebarHeader>Member List</CDBSidebarHeader>
                <div className="row p-2">
                    <div className="col-6">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#addformMember">Add New Member</button>
                        <AddMember />
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <div className="col-4 me-2">
                            <input className="form-control" type="search" placeholder="Search"
                                aria-label="Search" onChange={(e) => { setSearchMember(e.target.value) }} />
                        </div>
                        <div className="col-2">
                            <button className="btn btn-secondary" type="button"
                                onClick={() => searchHandler()}>Search</button>
                        </div>
                    </div>
                </div>
            </CDBBox>
            <div className="row ms-2 py-2">
                {dataMember.map((data) => {
                    let { id, name, phone, userName } = data
                    return (
                        <div className="col-md-4" key={id}>
                            <div className="card border-secondary mb-3 shadow p-2 mb-5 bg-body rounded">
                                <div className="row">
                                    <div className="d-flex justify-content-center">
                                        <img src="https://via.placeholder.com/150" className="rounded-circle"
                                            width="150px" height="150px" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title text-success fw-bold">{name}</h5>
                                            <div className="row mb-2 card-text">
                                                <small className="text-dark fw-bold mb-1">{userName}</small>
                                                <small className="text-dark fw-bold mb-1">{phone}</small>
                                                <div className="col">
                                                    <button className="btn btn-outline-info fw-bold dropdown-toggle" type="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">Action</button>
                                                    <ul className="dropdown-menu text-center">
                                                        <li>
                                                            <Link to={`/editMember/${id}`}
                                                                className="col-8 btn btn-outline-warning fw-bold mb-2">Edit
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <div className="col-8 btn btn-outline-danger fw-bold"
                                                                onClick={() => { deleteHandler(id, name) }}>Remove</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default MemberDataPage
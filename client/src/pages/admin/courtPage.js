import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CDBBox, CDBSidebarHeader } from 'cdbreact'

import { readCourtData, deleteCourtData, searchCourtData } from '../../fetchs/courtFetch'
import { AddCourt } from '../../modals/addcourt'

const CourtDataPage = () => {
    const [dataCourt, setDataCourt] = useState([])

    useEffect(() => {
        readCourtData(result => setDataCourt(result))
    }, [])

    const [searchCourt, setSearchCourt] = useState('')
    const searchHandler = async () => {
        let capitalize = searchCourt.split('')
        capitalize.splice(0, 1, capitalize[0].toUpperCase())
        let newSearch = capitalize.join('')

        await searchCourtData(newSearch, result => setDataCourt(result))
        console.log(dataCourt)
    }

    const deleteHandler = async (courtId, courtName) => {
        await deleteCourtData(courtId, courtName)
    }

    return (
        <>
            <CDBBox backgroundColor="#f0f0f0" color="navy">
                <CDBSidebarHeader>
                    Court List
                </CDBSidebarHeader>
                <div className="row p-2">
                    <div className="col-6">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#addForm">Add New Court</button>
                        <AddCourt />
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <div className="col-4 me-2">
                            <input className="form-control" type="search" placeholder="court type"
                                aria-label="Search" onChange={(e) => { setSearchCourt(e.target.value) }} />
                        </div>
                        <div className="col-2">
                            <button className="btn btn-secondary" type="button"
                                onClick={() => searchHandler()}>Search</button>
                        </div>
                    </div>
                </div>
            </CDBBox>
            <div className="m-2">
                <div className="d-flex justify-content-center bg-light">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {dataCourt.map(data => {
                            const { id, courtName, type, price } = data
                            let pricelabel = String(price).split('')
                            let value = pricelabel.splice(0, (pricelabel.length - 3)).join('')
                            let zero = pricelabel.splice((pricelabel.length - 3), 3).join('')
                            pricelabel = `Rp. ${value}.${zero},-`

                            return (
                                <div className="col" key={id}>
                                    <div className="card">
                                        <img src="https://via.placeholder.com/150" className="card-img-top"
                                            width="480px" height="270px" alt="..." />
                                        <div className="card-body">
                                            <div className="row">
                                                <h5 className="col text-primary">{courtName}</h5>
                                                <h5 className="col text-end text-success">{pricelabel}</h5>
                                            </div>
                                            <div className="row">
                                                <h6 className="text-secondary">{type}</h6>
                                            </div>
                                            <div className="row text-center p-2">
                                                <Link to={`/bookings/${id}`} className="btn btn-outline-primary mt-2 fw-bold">
                                                    Booking List
                                                </Link>
                                                <Link to={`/editCourt/${id}`} className="col btn btn-outline-warning 
                                                        btn-block mt-2 fw-bold">Edit
                                                </Link>
                                                <div className="col btn btn-outline-danger mt-2 fw-bold"
                                                    onClick={() => deleteHandler(id, courtName)}>Delete
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourtDataPage
import { CDBBox, CDBSidebarHeader } from 'cdbreact'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { findCourtData } from '../../fetchs/courtFetch'
import { readBookingData } from '../../fetchs/bookingFetch'
import pic from "../../Monody.png"
// import ReactUploadImage from './testing'

const BookingDataPage = () => {
    const params = useParams()
    const [court, setCourt] = useState({
        courtName: '', type: '', image: "https://via.placeholder.com/150"
    })

    useEffect(() => {
        let { courtId } = params
        findCourtData(courtId, result => { setCourt(result) })
        // readBookingData(courtId, result => { setBook(result) })
    }, [params])

    const [book, setBook] = useState({
        startTime: '', finishTime: '', usageTotal: 0
    })

    const [tes, settes] = useState('')
    const clickThis = () => {
        let date = new Date(tes)
        readBookingData(court.id, date, result => { setBook(result) })
    }


    // console.log(book[0].startTime)
    // let start = Number('09')
    // start = start.substring(0, 5)
    // console.log(court)

    const rows = []

    if (book.length !== undefined) {
        for (let i = 1; i <= 14; i++) {
            let open = i + 8
            let timeLabel = ''
            open === 9 ? timeLabel = '09:00' : timeLabel = `${open}:00`

            let status = 'Available'
            let name = '-'
            book.forEach(data => {
                let finishTime = Number(data.finishTime.substring(0, 2)) - 1
                let finishLabel = `${finishTime}:00`

                if (timeLabel === data.startTime.substring(0, 5) || timeLabel === finishLabel) {
                    status = 'Booked'
                    name = data.Member.name
                }
            })

            rows.push(
                <tr key={i}>
                    <td>{i}</td>
                    <td>{timeLabel}</td>
                    {
                        status === 'Available'
                            ? <td className="text-success fw-bold">{status}</td>
                            : <td className="text-primary fw-bold">{status}</td>
                    }
                    <td>{name}</td>
                </tr>
            )
        }
    }

    // console.log(new Date(book[0].dateSchedule))
    // console.log(book)

    return (
        <>
            <CDBBox backgroundColor="#f0f0f0" color="navy">
                <CDBSidebarHeader>
                    Booking List
                </CDBSidebarHeader>
            </CDBBox>
            <div className="row row-cols-1 row-cols-md-2 mx-auto py-2">
                <div className="col-md-6">
                    <div className="card">
                        <img src={pic} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="row">
                                <h5 className="col-6 fs-4 fw-bold text-primary card-title">{court.courtName}</h5>
                                <h6 className="col-6 text-end fw-bold text-secondary card-title">{court.type}</h6>
                            </div>
                            <div className="row">
                                <div className="col-3 text-muted fw-semibold card-text">Open Hours: </div>
                                <div className="col-6 text-start text-success fw-bold card-text">09:00 - 23:00</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Choose booking date</h5>
                            <div className="row">
                                <div className="col mt-1">
                                    <input type="date" onChange={(e) => { settes(e.target.value) }}></input>
                                </div>
                                <div className="col text-end">
                                    <button className="btn btn-outline-primary" onClick={() => { clickThis() }}>Check List</button>
                                </div>
                                <div className="row mt-3 ms-1">
                                    <table className="table table-stripped table-hover text-center">
                                        <thead className="bg-secondary text-white">
                                            <tr>
                                                <th className="col-1">No</th>
                                                <th>Time</th>
                                                <th>Status</th>
                                                <th>Booked By</th>
                                            </tr>
                                        </thead>
                                        <tbody className="table-group-divider bg-light">
                                            {
                                                book.length === undefined
                                                    ? <>
                                                        <tr>
                                                            <td colSpan={4}>
                                                                <p>Please Choose Date</p>
                                                            </td>
                                                        </tr>
                                                    </>
                                                    : rows
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                {/* <ReactUploadImage /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookingDataPage
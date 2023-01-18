import axios from 'axios'
// import Swal from 'sweetalert2'

const URL = 'http://localhost:5000/bookings'

export const readBookingData = async (courtId, date, cb) => {
    try {
        let bookings = await axios.get(`${URL}/${courtId}/${date}`)
        cb(bookings.data)
        // console.log(date)
    } catch (err) {
        console.log(err)
    }
}
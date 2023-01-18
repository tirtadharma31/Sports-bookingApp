import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:5000/courts'

export const readCourtData = async (cb) => {
    try {
        let courts = await axios.get(URL)
        cb(courts.data)
    } catch (err) {
        console.log(err)
    }
}

export const findCourtData = async (courtId, cb) => {
    try {
        let court = await axios.get(`${URL}/info/${courtId}`)
        cb(court.data)
    } catch (err) {
        console.log(err)
    }
}

export const searchCourtData = async (courtType, cb) => {
    try {
        let courts = await axios.get(`${URL}/search/${courtType}`)
        cb(courts.data)
    } catch (err) {
        console.log(err)
    }
}

// testing upload image
export const upload = async (data) => {
    try {
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        let response = await axios.put(`${URL}/upload`, data, config)
        return response
    } catch (err) {
        console.log(err)
    }
}

export const addCourtData = async (newData) => {
    try {
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        let addurl = URL + '/add'
        let response = await axios.post(addurl, newData, config)

        Swal.fire(
            'Add Court',
            'New Court has been added',
            'success'
        ).then(() => window.location.reload())

        return response
    } catch (err) {
        console.log(err)
    }
}

export const deleteCourtData = async (courtId, courtName) => {
    try {
        Swal.fire({
            title: `Remove ${courtName} court`,
            text: 'Are you sure want to remove this court?',
            icon: 'warning',
            showCancelButton: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                let deleteurl = `${URL}/delete/${courtId}`
                let response = await axios.delete(deleteurl)

                Swal.fire(
                    'Delete Success',
                    `${courtName} has been deleted!`,
                    'success'
                ).then(() => { window.location.reload() })

                return response
            }
        })
    } catch (err) {
        console.log(err)
    }
}

export const editCourtData = async (newData, courtId, courtName) => {
    try {
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        let id = +courtId
        let editurl = `${URL}/edit/${id}`
        let response = await axios.put(editurl, newData, config)

        Swal.fire(
            'Edit Court',
            `Court ${courtName} has been changed`,
            'success'
        )

        return response
    } catch (err) {
        console.log(err)
    }
}
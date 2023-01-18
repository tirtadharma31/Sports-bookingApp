import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:5000/members'

export const readMemberData = async (cb) => {
    try {
        let members = await axios.get(URL)
        cb(members.data)
    } catch (err) {
        console.log(err)
    }
}

export const findMemberData = async (memberId, cb) => {
    try {
        let member = await axios.get(`${URL}/info/${memberId}`)
        cb(member.data)
    } catch (err) {
        console.log(err)
    }
}

export const searchMemberData = async (memberName, cb) => {
    try {
        let members = await axios.get(`${URL}/search/${memberName}`)
        cb(members.data)
    } catch (err) {
        console.log(err)
    }
}

export const addMemberData = async (newData) => {
    try {
        let addurl = URL + '/add'
        let response = await axios.post(addurl, newData)

        Swal.fire(
            'Add Member',
            'New Member has been added',
            'success'
        ).then(() => window.location.reload())

        return response
    } catch (err) {
        console.log(err)
    }
}

export const deleteMemberData = async (memberId, memberName) => {
    try {
        Swal.fire({
            title: `Remove ${memberName} member`,
            text: 'Are you sure want to remove this member?',
            icon: 'warning',
            showCancelButton: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                let deleteurl = `${URL}/delete/${memberId}`
                let response = await axios.delete(deleteurl)

                Swal.fire(
                    'Delete Success',
                    `${memberName} has been deleted!`,
                    'success'
                ).then(() => { window.location.reload() })

                return response
            }
        })
    } catch (err) {
        console.log(err)
    }
}

export const editMemberData = async (newData) => {
    try {
        let editurl = `${URL}/edit/${newData.id}`
        let response = await axios.put(editurl, newData)

        Swal.fire(
            'Edit Member',
            `Member ${newData.memberName} has been changed`,
            'success'
        )

        return response
    } catch (err) {
        console.log(err)
    }
}
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { register } from "../fetchs/memberFetch"

const Register = () => {
    const [form, setForm] = useState({
        name: '', phone: '', userName: '', password: ''
    })

    const navigation = useNavigate()
    const registerHandler = async () => {
        let response = await register(form)

        if (response) navigation('/')
        else console.log(response)
    }

    return (
        <div className="row vh-100" style={{ backgroundColor: "#615355" }}>
            <div className="container mx-auto w-50 bg-light"
                style={{ position: 'fixed', top: '100px', left: '350px' }}>
                <form className="p-4" style={{ backgroundColor: "#F3E2C7" }}>
                    <h3>REGISTER FORM</h3>
                    <hr />
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="name" placeholder="name"
                            onChange={(e) => { setForm({ ...form, name: e.target.value }) }} />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="phone" placeholder="phone"
                            onChange={(e) => { setForm({ ...form, phone: e.target.value }) }} />
                        <label htmlFor="phone">Phone Number</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="username" placeholder="username"
                            onChange={(e) => { setForm({ ...form, userName: e.target.value }) }} />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="password" placeholder="password"
                            onChange={(e) => { setForm({ ...form, password: e.target.value }) }} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <div className="row">
                            <div className="col">
                                <Link to="/">
                                    <p className="text-primary fw-semibold">Already have member account?</p>
                                </Link>
                            </div>
                            <div className="col text-end">
                                <button type="button" className="btn" style={{ backgroundColor: "#694E52", color: "whitesmoke" }}
                                    onClick={() => { registerHandler() }}>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
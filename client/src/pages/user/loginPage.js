import { useState } from "react"
import { loginMember } from "../../fetchs/memberFetch"

const LoginPage = (props) => {
    const { cbLogin } = props
    const [form, setForm] = useState({
        userName: '', password: ''
    })

    const [row, setRow] = useState((
        <div></div>
    ))

    const loginHandler = async () => {
        let response = await loginMember(form)

        if (response) cbLogin(true)
        else setRow((<div className="alert alert-danger" role="alert">Incorrect Password</div>))
    }


    return (
        <div className="row vh-100" style={{ backgroundColor: "#615355" }}>
            <div className="container mx-auto w-50 bg-light"
                style={{ position: 'fixed', top: '200px', left: '350px' }}>
                <form className="p-4" style={{ backgroundColor: "#F3E2C7" }}>
                    <h3>LOGIN FORM</h3>
                    <div className="text-center">{row}</div>
                    <hr />
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
                                <p className="text-primary fw-semibold">Don't have member account yet?</p>
                            </div>
                            <div className="col text-end">
                                <button type="button" className="btn" style={{ backgroundColor: "#694E52", color: "whitesmoke" }}
                                    onClick={() => loginHandler()}>Login</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
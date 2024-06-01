import React from "react";

// Functional component for login form
function Login() {
    return (
        <div>
            {/* Title */}
            <p className="fs-1 text-center">LOGIN FORM</p>

            {/* Login form */}
            <form className="container-sm">
                {/* Email Address */}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                {/* Password */}
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                {/* Submit Button */}
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button">Submit</button>
                </div>
            </form>
        </div>
    )
}

// Exporting the Login component
export default Login;

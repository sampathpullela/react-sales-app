import React from "react";

// Functional component for registration form
function Register() {
    return (
        <div>
            <div>
                {/* Title */}
                <p className="fs-1 text-center">REGISTRATION FORM</p>

                {/* Registration form */}
                <form className="container-sm">
                    {/* First Name */}
                    <div className="mb-3">
                        <label htmlFor="exampleInputFirstname1" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="exampleInputFirstname1" aria-describedby="emailHelp" />
                    </div>
                    {/* Last Name */}
                    <div className="mb-3">
                        <label htmlFor="exampleInputLastname1" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="exampleInputLastname1" />
                    </div>
                    {/* Email */}
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" />
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
        </div>
    )
}

// Exporting the Register component
export default Register;

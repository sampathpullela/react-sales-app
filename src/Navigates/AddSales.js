import React from "react";

// Functional component for adding sales
function AddSales(){
    return(
        <div>
            {/* Title */}
            <p className="fs-1 text-center">ADD SALE ENTRY</p>
            {/* Sale entry form */}
            <form className="container-sm">
                {/* Product Name */}
                <div className="mb-3">
                    <label htmlFor="exampleInputProduct1" className="form-label">
                        Product Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputProduct1"
                        aria-describedby="productHelp"
                    />
                </div>
                {/* Quantity */}
                <div className="mb-3">
                    <label htmlFor="exampleInputQuantity1" className="form-label">
                        Quantity
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputQuantity1"
                    />
                </div>
                {/* Amount */}
                <div className="mb-3">
                    <label htmlFor="exampleInputAmount1" className="form-label">
                        Amount
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputAmount1"
                    />
                </div>
                {/* Submit Button */}
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

// Exporting the AddSales component
export default AddSales;

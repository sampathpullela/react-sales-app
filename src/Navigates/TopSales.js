import React from "react";

// Functional component for top sales
function TopSales() {
    return (
        <div>
            {/* Title */}
            <p className="fs-1 text-center">TOP 5 SALES</p>

            {/* Table for displaying top sales */}
            <table className="table mt-3 container-sm">
                {/* Table headers */}
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Sales Id:</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Sale Amount</th>
                    </tr>
                </thead>
                {/* Table body */}
                <tbody>
                    {/* Row 1 */}
                    <tr>
                        <th scope="row">1</th>
                        <td>S1212</td>
                        <td>Laptop</td>
                        <td>2</td>
                        <td>90000</td>
                    </tr>
                    {/* Row 2 */}
                    <tr>
                        <th scope="row">2</th>
                        <td>S1423</td>
                        <td>Mobile</td>
                        <td>5</td>
                        <td>85000</td>
                    </tr>
                    {/* Additional rows go here */}
                </tbody>
            </table>
        </div>
    )
}

// Exporting the TopSales component
export default TopSales;

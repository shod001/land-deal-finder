import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/deals")
        .then(res => setDeals(res.data))
        .catch(err => console.log(err));
    }, []);

    return (
        <div style={{ padding: "20px" }}>
        <h1>🏡 Land Deal Finder</h1>

        <table border="1" cellPadding="10">
        <thead>
        <tr>
        <th>City</th>
        <th>Price</th>
        <th>Area</th>
        <th>Predicted Price</th>
        <th>Deal Score</th>
        </tr>
        </thead>
        <tbody>
        {deals.map((d, i) => (
            <tr key={i}>
            <td>{d.city}</td>
            <td>{d.price}</td>
            <td>{d.area}</td>
            <td>{d.predicted_price.toFixed(0)}</td>
            <td style={{ color: d.deal_score > 0 ? "green" : "red" }}>
            {d.deal_score.toFixed(2)}
            </td>
            </tr>
        ))}
        </tbody>
        </table>
        </div>
    );
}

export default App;

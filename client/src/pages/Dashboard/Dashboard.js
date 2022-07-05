import React, { useEffect } from "react";

const url = "http://localhost:5000";

const Dashboard = () => {
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();

            console.log(data);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h4>Dashboard component</h4>
        </>
    )
}

export default Dashboard;
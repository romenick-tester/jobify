import React, { useEffect } from "react";


const Dashboard = () => {
    const fetchData = async () => {
        try {
            const response = await fetch("/api/v1");
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
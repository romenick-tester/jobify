import React, { useState } from "react";
import { useSelector } from "react-redux";
import Wrapper from "../../../assets/wrappers/ChartsContainer";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";


const ChartsContainer = () => {
    const [barchart, setBarchart] = useState(true);

    const { monthlyApplications } = useSelector(state => state.stats);

    return (
        <Wrapper>
            <h4>Monthly Applications</h4>
            <button type="button" onClick={() => setBarchart(!barchart)}>
                {barchart ? "Area Chart" : "Bar Chart"}
            </button>
            {barchart ? <BarChart data={monthlyApplications} /> : <AreaChart data={monthlyApplications} />}
        </Wrapper>
    )
};

export default ChartsContainer;
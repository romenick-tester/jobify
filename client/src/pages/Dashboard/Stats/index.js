import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStats } from "../../../assets/context/actions";
import { Loading } from "../../../components";
import ChartsContainer from "./ChartsContainer";
import StatsContainer from "./StatsContainer";


const Stats = () => {
    const dispatch = useDispatch();

    const { loading, stats, monthlyApplications } = useSelector(state => state.stats);

    useEffect(() => {
        dispatch(getStats());
    }, [dispatch]);

    if (loading) {
        return <Loading center />
    };

    return (
        <>
            <StatsContainer stats={stats} />
            {monthlyApplications.length > 0 && <ChartsContainer />}
        </>
    )
}

export default Stats;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStats } from "../../assets/context/actions";
import { Loading } from "../../components";


const Stats = () => {
    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.stats);

    useEffect(() => {
        dispatch(getStats());
    }, [dispatch]);

    if (loading) {
        return <Loading />
    };

    return (
        <>
            <h4>Stats component</h4>
        </>
    )
}

export default Stats;
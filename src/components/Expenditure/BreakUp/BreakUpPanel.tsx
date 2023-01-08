import { FC, useEffect, useState } from "react"
import BreakUp, { BreakUpInfo } from "./BreakUp";


const BreakUpPanel : FC = () => {
    const [budgetExpenditures, setBudgetExpenditures] =  useState([]);

    useEffect(() => {
        const getAccountsUrl = `${process.env.REACT_APP_FINANCES_API_HOST}/expenditure/2023/01`;
        fetch(getAccountsUrl)
            .then(response=>response.json())
            .then(data => {
                setBudgetExpenditures(data);
            }
        )
    }, []);

    let count : number = 0;

    const breakUps = budgetExpenditures.map(
        (budgetExpenditure : BreakUpInfo) => {
            count++;
            return <BreakUp key={count} {...budgetExpenditure}></BreakUp>
        }
    )
    
    return (<>
    {breakUps}
    </>)
}

export default BreakUpPanel;
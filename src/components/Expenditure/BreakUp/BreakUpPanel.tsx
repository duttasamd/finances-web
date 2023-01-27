import { FC, useEffect, useState } from "react"
import BreakUp, { BreakUpInfo } from "./BreakUp";


const BreakUpPanel : FC = () => {
    const [budgetExpenditures, setBudgetExpenditures] =  useState([]);

    useEffect(() => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        const getAccountsUrl = `${process.env.REACT_APP_FINANCES_API_HOST}/expenditure/${year}/${month}`;
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
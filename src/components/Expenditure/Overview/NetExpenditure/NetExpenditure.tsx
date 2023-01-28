import { FC, useEffect, useState } from "react";
import NetExpenditureBar from "./NetExpenditureBar";

const NetExpenditure : FC = () => {
    // const [fixedPercent, setFixedPercent] = useState(0);
    // const [spentPercent, setSpentPercent] = useState(0);
    // const [remainingPercent, setRemainingPercent] = useState(100);

    const [spent, setSpent] = useState(0);
    const [fixed, setFixed] = useState(0);
    const [budget, setBudget] = useState(0);

    const [netExpenditureBarProps, setNetExpenditureBarProps] = useState(
        {
            fixed : 0,
            spent : 0,
            remaining : 100
        }
    );

    useEffect(() => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        const getAccountsUrl = `${process.env.REACT_APP_FINANCES_API_HOST}/expenditure/summary/${year}/${month}`;
        fetch(getAccountsUrl)
            .then(response=>response.json())
            .then(data => {
                setSpent(data.amountSpent);
                setBudget(data.budget);
                setFixed(data.remainingFixed);

                setNetExpenditureBarProps({
                    fixed : data.remainingFixed,
                    spent : data.amountSpent,
                    remaining : data.budget - (data.amountSpent + data.remainingFixed)
                })
            }
        )
    }
    , []);

    return(
        <div>
            <div className="container d-flex flex-row px-sm-5 py-sm-5 py-3 px-3">
                <h3 className="font-weight-bold">EXPENSES</h3>
                <div className="d-flex flex-row justify-content-end flex-grow-1">
                    <h2 className="font-weight-bold"><span>€</span>{spent.toFixed(2)}</h2>
                    <small className="ms-1 mt-2 mt-md-3"> / {budget}</small>
                </div>
            </div>
            <div>
                <NetExpenditureBar {...netExpenditureBarProps} ></NetExpenditureBar>
            </div>
        </div>
    );
}

export default NetExpenditure;
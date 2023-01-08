import { FC } from "react";
import NetWorthBar from "./NetWorthBar";
import AccountBar from "./NetWorthBar";

const NetWorth : FC = () => {

    const netWorthBarProps = {
        fixedPercent : 55,
        tradingPercent : 20,
        currentPercent : 20,
        currentDebtPercent : 5
    }

    return (
        <div>
            <div className="container d-flex flex-row px-sm-5 py-sm-5 py-3 px-3">
                <h3 className="font-weight-bold">NET WORTH</h3>
                <div className="d-flex flex-row justify-content-end flex-grow-1">
                    <h2 className="font-weight-bold"><span>€</span>100000</h2>
                    <small className="ms-1">2000</small>
                </div>
            </div>
            <div>
                <NetWorthBar {...netWorthBarProps} ></NetWorthBar>
            </div>
        </div>
    );
}

export default NetWorth;
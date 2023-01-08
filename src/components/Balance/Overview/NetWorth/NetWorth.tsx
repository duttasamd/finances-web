import { FC } from "react";
import NetWorthBar, { NetWorthBarProps } from "./NetWorthBar";

export interface NetWorthProps {
    netWorthBarProps : NetWorthBarProps,
    netWorth : number,
    dailyChange : number,
    weeklyChange : number,
    monthlyChange : number
}

const NetWorth : FC<NetWorthProps> = (netWorthProps) => {
    return (
        <div>
            <div className="container d-flex flex-row px-sm-5 py-sm-5 py-3 px-3">
                <h3 className="font-weight-bold">NET WORTH</h3>
                <div className="d-flex flex-row justify-content-end flex-grow-1">
                    <h2 className="font-weight-bold"><span>€</span>{netWorthProps.netWorth.toFixed(2)}</h2>
                    {/* <small className="ms-1">{netWorthProps.dailyChange}</small> */}
                </div>
            </div>
            <div>
                <NetWorthBar {...netWorthProps.netWorthBarProps} ></NetWorthBar>
            </div>
        </div>
    );
}

export default NetWorth;
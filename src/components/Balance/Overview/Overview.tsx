import { FC, useEffect, useState } from "react";
import NetWorth from "./NetWorth/NetWorth";
import FixedAccountOverview, { FixedAccountInfoList } from "./FixedAccount/FixedAccountOverview";
import CurrentAccountOverview, { CurrentAccountInfoList } from "./CurrentAccount/CurrentAccountOverview";
import TradingAccountOverview, { TradingAccountInfoList } from "./TradingAccount/TradingAccountOverview";

const Overview : FC = () => {
    const [fixedAccountInfos, setFixedAccountInfos] = useState([]);
    const [currentAccountInfos, setCurrentAccountInfos] = useState([]);
    const [tradingAccountInfos, setTradingAccountInfos] = useState([]);
    
    const fixedAccountInfoList : FixedAccountInfoList = {
        fixedAccountInfos : fixedAccountInfos
    };

    const currentAccountInfoList : CurrentAccountInfoList = {
        currentAccountInfos : currentAccountInfos
    };

    const tradingAccountInfoList : TradingAccountInfoList = {
        tradingAccountInfos : tradingAccountInfos
    };

    useEffect(() => {
        const getAccountsUrl = `${process.env.REACT_APP_FINANCES_API_HOST}/account/`;
        fetch(getAccountsUrl)
            .then(response=>response.json())
            .then(data => {
                setFixedAccountInfos(data.FIXED_DEPOSIT);
                setCurrentAccountInfos(data.CURRENT);
                setTradingAccountInfos(data.TRADING);
            }
        )
    }, []);

    return <div className="container mt-3 d-grid gap-4 gap-sm-5">
        <NetWorth></NetWorth>
        <FixedAccountOverview {...fixedAccountInfoList}></FixedAccountOverview>
        <CurrentAccountOverview {...currentAccountInfoList}></CurrentAccountOverview>
        <TradingAccountOverview {...tradingAccountInfoList}></TradingAccountOverview>
    </div>;
}

export default Overview;
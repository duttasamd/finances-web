import { FC, useEffect, useState } from "react";
import NetWorth, { NetWorthProps } from "./NetWorth/NetWorth";
import FixedAccountOverview, { FixedAccountInfoList } from "./FixedAccount/FixedAccountOverview";
import CurrentAccountOverview, { CurrentAccountInfoList } from "./CurrentAccount/CurrentAccountOverview";
import TradingAccountOverview, { TradingAccountInfoList } from "./TradingAccount/TradingAccountOverview";
import FixedAccount, { FixedAccountInfo } from "./FixedAccount/FixedAccount";
import CurrencyConverter from "../../../helpers/CurrencyConverter";

const Overview : FC = () => {
    const [fixedAccountInfos, setFixedAccountInfos] = useState([]);
    const [currentAccountInfos, setCurrentAccountInfos] = useState([]);
    const [tradingAccountInfos, setTradingAccountInfos] = useState([]);
    const [netWorthProps, setNetWorthProps] = useState({
        netWorthBarProps :{
            fixedPercent : 0,
            tradingPercent : 0,
            currentPercent : 100,
            currentDebtPercent : 0
        },
        netWorth : 0,
        dailyChange : 0,
        weeklyChange : 0,
        monthlyChange : 0
    });
    
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

                let fixed = 0;
                let current = 0;
                let trading = 0;

                (data.FIXED_DEPOSIT as FixedAccountInfo[]).forEach(fixedAccountInfo => {
                    fixed += CurrencyConverter.convert(fixedAccountInfo.currentAmount, fixedAccountInfo.currency, "EUR");
                });

                (data.CURRENT as FixedAccountInfo[]).forEach(fixedAccountInfo => {
                    current += CurrencyConverter.convert(fixedAccountInfo.currentAmount, fixedAccountInfo.currency, "EUR");
                });

                (data.TRADING as FixedAccountInfo[]).forEach(fixedAccountInfo => {
                    trading += CurrencyConverter.convert(fixedAccountInfo.currentAmount, fixedAccountInfo.currency, "EUR");
                });

                const netWorth = fixed + current + trading;

                setNetWorthProps({
                    netWorthBarProps : {
                        fixedPercent : (fixed / netWorth) * 100,
                        currentPercent : (current / netWorth) * 100,
                        tradingPercent : (trading / netWorth) * 100,
                        currentDebtPercent : 0
                    },
                    netWorth : netWorth,
                    dailyChange : 0,
                    weeklyChange : 0,
                    monthlyChange : 0
                })
            }
        )
    }, []);

    return <div className="container mt-3 d-grid gap-4 gap-sm-5">
        <NetWorth {...netWorthProps}></NetWorth>
        <FixedAccountOverview {...fixedAccountInfoList}></FixedAccountOverview>
        <CurrentAccountOverview {...currentAccountInfoList}></CurrentAccountOverview>
        <TradingAccountOverview {...tradingAccountInfoList}></TradingAccountOverview>
    </div>;
}

export default Overview;
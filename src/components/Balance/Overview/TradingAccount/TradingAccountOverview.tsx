import { FC, useEffect, useState } from "react";
import { Card, Collapse } from "react-bootstrap";
import CurrencyConverter from "../../../../helpers/CurrencyConverter";
import TradingAccount, { TradingAccountInfo } from "./TradingAccount";

export interface TradingAccountInfoList {
    tradingAccountInfos : TradingAccountInfo[]
}

const TradingAccountOverview : FC<TradingAccountInfoList> = (tradingAccountInfoList : TradingAccountInfoList) => {
    const [open, setOpen] = useState(false);

    let count : number = 0;
    let total : number = 0;

    const tradingAccounts = tradingAccountInfoList.tradingAccountInfos.map((tradingAccountInfo) => {
        count++;
        const convertedCurrencyValue = CurrencyConverter.convert(tradingAccountInfo.currentAmount, tradingAccountInfo.currency, "EUR");
        total += convertedCurrencyValue;
        
        return (<>
                <TradingAccount {...tradingAccountInfo} key={count}></TradingAccount>
                {count == tradingAccountInfoList.tradingAccountInfos.length ? null : <hr /> }
            </>
        )
    });
    
    return (
        <Card className="mx-sm-5 mx-3">
            <Card.Header onClick={() => setOpen(!open)} className="d-flex bg-slategray f-white">
                <div className="me-auto">Trading Accounts</div>
                <div className="ms-auto"><span>€</span> {total}</div>
            </Card.Header>
            <Collapse in={open} className="px-0 pb-3">
                <div>
                    {
                        tradingAccounts
                    }
                </div>
            </Collapse>
        </Card>
    );
}

export default TradingAccountOverview;
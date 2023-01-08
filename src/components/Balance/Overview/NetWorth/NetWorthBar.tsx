import { FC, useEffect, useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

interface NetWorthBarProps {
    fixedPercent : number,
    tradingPercent : number,
    currentPercent : number,
    currentDebtPercent : number
}


const NetWorthBar : FC<NetWorthBarProps> = (netWorthBarProps : NetWorthBarProps) => {
    const [fixedLabel, setFixedLabel] = useState("Fixed");
    const [tradingLabel, setTradingLabel] = useState("Trading");
    const [currentLabel, setCurrentLabel] = useState("Current");
    let isShowingPercent = false;

    const updateLabel = () => {
        if(isShowingPercent) {
            setFixedLabel("Fixed");
            setTradingLabel("Trading");
            setCurrentLabel("Current");
        } else {
            setFixedLabel(netWorthBarProps.fixedPercent.toString() + "%");
            setTradingLabel(netWorthBarProps.tradingPercent.toString() + "%");
            setCurrentLabel((netWorthBarProps.currentPercent + netWorthBarProps.currentDebtPercent).toString() + "%");
        }
        isShowingPercent = !isShowingPercent;
        setTimeout(updateLabel, 3000);
    }

    useEffect(() => {
        setTimeout(updateLabel, 3000);
    }, []);

    return (
        <ProgressBar className="mx-sm-5 mx-3">
            <ProgressBar variant="black" now={netWorthBarProps.fixedPercent} key={1} label={fixedLabel}/>
            <ProgressBar variant="slategray" now={netWorthBarProps.tradingPercent} key={2} label={tradingLabel} />
            <ProgressBar variant="gray" now={netWorthBarProps.currentPercent} key={3} label={currentLabel} className="f-black"/>
            <ProgressBar striped variant="gray" now={netWorthBarProps.currentDebtPercent} key={4} />
        </ProgressBar>
    );
}

export default NetWorthBar;
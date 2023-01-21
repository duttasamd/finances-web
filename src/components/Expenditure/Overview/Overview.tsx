import { FC, useEffect, useState } from "react";
import AddExpenditure from "../Add/AddExpenditure";
import BreakUpPanel from "../BreakUp/BreakUpPanel";
import ExpenditurePanel from "../ExpenditurePanel";
import NetExpenditure from "./NetExpenditure/NetExpenditure";

export interface ExpenditureOverviewProps {
    isMobile : boolean
}

const Overview : FC<ExpenditureOverviewProps> = (expenditureOverviewProps) => {
    const [panel, setPanel] = useState("breakup");

    const renderSwitch = (panel : string) => {
        switch(panel) {
            case "add" : return <AddExpenditure setPanel={setPanel}></AddExpenditure>
                break;
            default : return <BreakUpPanel></BreakUpPanel>
        }
    }
    
    return (
        <div className="container mt-3 d-grid gap-3 gap-sm-4">
            <NetExpenditure></NetExpenditure>
            <ExpenditurePanel setPanel={setPanel}></ExpenditurePanel>
            {
                renderSwitch(panel)
            }
        </div>
    )
}

export default Overview;
import { FC } from "react";
import Overview from "./Overview/Overview";

export interface ExpenditureProps {
    isMobile : boolean
}

const Expenditure : FC<ExpenditureProps> = (expenditureProps) => {
    return <div className="h-100 bg-black">
        <Overview isMobile></Overview>
    </div>;
}

export default Expenditure;
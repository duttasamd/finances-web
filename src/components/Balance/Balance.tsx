import { FC } from "react";
import "./balance.css";
import Overview from "./Overview/Overview";

const Balance : FC = () => {
    return <div className="h-100">
        <Overview></Overview>
    </div>;
}

export default Balance;
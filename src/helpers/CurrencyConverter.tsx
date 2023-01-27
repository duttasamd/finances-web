export default class CurrencyConverter {

    static lastUpdated : Date;
    
    static conversionMap = {
        EURINR : 87,
        INREUR : 0.011
    }

    static updateRates = () => {
        console.log("Updating Rates...");
        this.lastUpdated = new Date();

        const exchangeUrl = `${process.env.REACT_APP_EXCHANGE_API_URL}&base=EUR&symbols=INR`;

        fetch(exchangeUrl).then(response => response.json())
        .then(result => {
            console.log(result);
            console.log(result.rates.INR);

            this.conversionMap.EURINR = result.rates.INR;
            this.conversionMap.INREUR = 1/result.rates.INR;

            console.log(this.conversionMap);
        })
    }

    static convert = (amount : number, fromCurrency : string, toCurrency : string) => {
        if(this.lastUpdated === undefined) {
            this.updateRates();
        }
        

        switch(fromCurrency + toCurrency) {
            case "EURINR" : return amount * CurrencyConverter.conversionMap.EURINR;
            case "INREUR" : return amount * CurrencyConverter.conversionMap.INREUR;
        }
        return amount;
    }
}
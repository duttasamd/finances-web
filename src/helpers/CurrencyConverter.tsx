export default class CurrencyConverter {

    static lastUpdated : Date;
    
    static conversionMap = {
        EURINR : 87,
        INREUR : 0.011
    }

    static updateRates = () => {
        console.log("Updating Rates...");
        this.lastUpdated = new Date();

        const exchangeUrl = `${process.env.REACT_APP_FINANCES_API_HOST}/quote/EURINR=X`;

        fetch(exchangeUrl).then(response => response.json())
        .then(result => {
            this.conversionMap.EURINR = result;
            this.conversionMap.INREUR = 1/result;
        })
    }

    static {
        this.updateRates();
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
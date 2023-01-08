export default class CurrencyConverter {
    
    static conversionMap = {
        EURINR : 87,
        INREUR : 0.011
    }

    static convert = (amount : number, fromCurrency : string, toCurrency : string) => {
        switch(fromCurrency + toCurrency) {
            case "EURINR" : return amount * CurrencyConverter.conversionMap.EURINR;
            case "INREUR" : return amount * CurrencyConverter.conversionMap.INREUR;
        }
        return amount;
    }
}
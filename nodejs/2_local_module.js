let Currency = {
    toDollar : function(rupees){
        let temp = rupees * 0.012;
        return temp;
    },
    ToYen : function(rupees){
        let temp = rupees * 1.8124;
        return temp;
    },
    ToPound : function(rupees){
        let temp = rupees * 0.0098;
        return temp;
    }
}
module.exports.Currency = Currency;
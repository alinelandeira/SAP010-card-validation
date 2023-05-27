const validator = {

  isValid: function (creditCardNumber) {
    const transfCard = creditCardNumber.split("").reverse(); // metodo usado para inverter a ordem dos números
    
    let retCard = 0;

    for (let i = 0; i < transfCard.length; i++) {
      const numCard = parseInt(transfCard[i])

      if (i % 2 !== 0 && numCard >= 5) {
        retCard = retCard + (numCard * 2) - 9;
      }

      else if (i % 2 !== 0 && numCard <= 5) {
        retCard = retCard + (numCard * 2);
      }
      else {
        retCard = retCard + numCard;
      }

    }
    if (retCard % 10 === 0) {
      return true
    }
    else {
      return false
    }
  },

  maskify: function (creditCardNumber){ 
  
    return creditCardNumber.replace(/.(?=.{4})/g,"#") 
     
  }

}

export default validator; 

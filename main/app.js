function addTokens(input, tokens){
   
    if(typeof input !== "string")
    throw new Error(`Invalid input`);
    else if(input.length < 6)
    throw new Error(`Input should have at least 6 characters`);
    else if (typeof tokens[0].tokenName !== "string") 
        throw new Error('Invalid array format');
    else if(input.includes(`...`) === false)
    return input;
    else{
    
        poz = input.indexOf(`...`);
        newString = input.substring(0,poz).concat("${" + `${tokens[0].tokenName}` + "}").concat(input.substring(poz+3));
        return newString;
    }
}

const app = {
    addTokens: addTokens
}

module.exports = app;
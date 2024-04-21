const { validate } = require('bitcoin-address-validation');

export const isValidBitcoinAddress = (address) => {
    return validate(address);
}

// address: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
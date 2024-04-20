const { validate } = require('bitcoin-address-validation');

export const isValidBitcoinAddress = (address) => {
    return validate(address);
}
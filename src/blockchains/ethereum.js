export function isValidETHAddress(str) {
    let regex = new RegExp(/^(0x)?[0-9a-fA-F]{40}$/);
  
    if (str == null) {
        return false;
    }
  
    return regex.test(str);
}

// const address = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'

// console.log(isValidETHAddress(address)); 
import { isValidPolkadotAddress } from '../blockchains/polkadot'
import { isValidETHAddress } from '../blockchains/ethereum'
import { isValidBitcoinAddress } from '../blockchains/bitcoin'

export const validators = {
    'polkadot': isValidPolkadotAddress,
    'ethereum': isValidETHAddress,
    'bitcoin': isValidBitcoinAddress,
}
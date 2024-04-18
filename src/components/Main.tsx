'use client'

import { isValidPolkadotAddress } from '../blockchains/polkadot/try'

export const Main = () => {
    const checkAddress = () => {
        const blockchain = (document.getElementById('blockchain') as HTMLSelectElement).value;  
        const address = document.getElementById('address') as HTMLInputElement;

        if (address.value === '') {
            alert('Please enter an address')
            return
        }
        
        if (blockchain === 'Polkadot') {
            const result = isValidPolkadotAddress(address.value);
            console.log(result)
        } else {
            alert('Blockchain not supported')
            return
        }
    }

    return (
        <>
            <div className="flex flex-col">
                <h1 className="text-white font-bold text-4xl mb-8">Crypto Address Validator</h1>
                <div className="bg-[#2f2f2f] px-8 py-8 rounded-3xl mb-10">
                    <div>
                        <div className="mb-7">
                            <label htmlFor="blockchain" className="text-white text-base font-semibold">Select Blockchain</label>
                            <select name="blockchain" id="blockchain" className="bg-[#2f2f2f] text-gray-200 text-sm rounded-3xl w-full px-2 py-2 shadow-gray-600 shadow-md mt-3 cursor-pointer">
                                <option value="bitcoin">Bitcoin</option>
                                <option value="ethereum">Ethereum</option>
                                <option value="Polkadot">Polkadot</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="address" className="text-white text-base font-semibold">Enter Address</label>
                            <input 
                                type="text" 
                                name="address" 
                                id="address" 
                                placeholder="Paste your address here..." 
                                className="bg-[#2f2f2f] text-gray-200 text-sm rounded-3xl w-full px-2 py-2 shadow-gray-600 shadow-md mt-3 placeholder-gray-200 focus:placeholder-transparent"
                                />
                        </div>
                    </div>
                    <button type="button" className="mt-6 bg-white text-gray-500 rounded-3xl w-full py-2 font-semibold text-sm hover:bg-black hover:text-white hover:font-semibold transition duration-200" onClick={checkAddress}>
                        Check Address
                    </button>
                </div>
                <div className="m-auto">
                    <p className="text-white font-bold">Result:</p>
                </div>
            </div>
        </>
    );
}
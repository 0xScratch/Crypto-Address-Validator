'use client'

import { validators } from './index'

export const Main = () => {
    const checkAddress = () => {
        const blockchain = (document.getElementById('blockchain') as HTMLSelectElement).value;  
        console.log(blockchain)
        const address = document.getElementById('address') as HTMLInputElement;

        if (address.value === '') {
            alert('Please enter an address')
            return
        }

        let result = false
        
        if (blockchain === 'polkadot') {
            result = validators[blockchain](address.value);
            console.log(result)
        } else if (blockchain === 'ethereum') {
            result = validators[blockchain](address.value)
            console.log(result)
        } else if (blockchain === 'bitcoin') {
            result = validators[blockchain](address.value)
            console.log(result)
        }

        if (result) {
            const validResult = document.getElementById('valid-result');
            if (validResult) {
                validResult.classList.remove('hidden');
            }

            setTimeout(() => {
                validResult?.classList.add('hidden');
            }, 5000)
        } else {
            const invalidResult = document.getElementById('invalid-result');
            if (invalidResult) {
                invalidResult.classList.remove('hidden');
            }

            setTimeout(() => {
                invalidResult?.classList.add('hidden');
            }, 5000)
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
                            <select name="blockchain" id="blockchain" className="bg-[#2f2f2f] text-gray-200 text-sm rounded-3xl w-full px-1 py-2 shadow-gray-600 shadow-md mt-3 cursor-pointer outline-none">
                                <option value="bitcoin">Bitcoin</option>
                                <option value="ethereum">Ethereum</option>
                                <option value="polkadot">Polkadot</option>
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
                <div id='valid-result' className="m-auto text-2xl hidden">
                    <p className="text-green-500 font-bold">Valid Address</p>
                </div>
                <div id='invalid-result' className="m-auto text-2xl hidden">
                    <span className="text-red-600 font-bold">Invalid Address</span>
                </div>
            </div>
        </>
    );
}
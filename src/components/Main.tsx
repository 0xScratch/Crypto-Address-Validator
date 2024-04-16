'use client'

import Image from "next/image";
import Select from "react-select";

export const Main = () => {
    const options = [
        { value: 'bitcoin', label: 'Bitcoin', logo: '/logos/bitcoin.png' },
        { value: 'ethereum', label: 'Ethereum', logo: '/logos/ethereum.png' },
        { value: 'polkadot', label: 'Polkadot', logo: '/logos/polkadot.png' }
    ]

    const formatOptionLabel = ({ value, label, logo }: { value: string, label: string, logo: string }) => (
        <div className="flex">
            <Image src={logo} alt={value} width={20} height={20}/>
            {label}
        </div>
    )

    return (
        <>
            <div className="flex flex-col">
                <h1 className="text-white font-bold text-4xl mb-8">Crypto Address Validator</h1>
                <div className="bg-[#2f2f2f] px-8 py-8 rounded-3xl mb-10">
                    <div>
                        <div className="mb-7">
                            <label htmlFor="blockchain" className="text-white text-base font-semibold">Select Blockchain</label>
                            {/* <select name="blockchain" id="blockchain" className="bg-[#2f2f2f] text-gray-200 text-sm rounded-3xl w-full px-2 py-2 shadow-gray-600 shadow-md mt-3 cursor-pointer">
                                <option value="bitcoin">Bitcoin</option>
                                <option value="ethereum">Ethereum</option>
                                <option value="Polkadot">Polkadot</option>
                            </select> */}
                            <Select 
                                name="blockchain"
                                id="blockchain"
                                className="bg-[#2f2f2f] text-gray-200 text-sm rounded-3xl w-full px-2 py-2 shadow-gray-600 shadow-md mt-3 cursor-pointer"
                                options={options}
                                formatOptionLabel={formatOptionLabel}
                            />
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
                    <button type="button" className="mt-6 bg-white text-gray-500 rounded-3xl w-full py-2 font-semibold text-sm hover:bg-black hover:text-white hover:font-semibold transition duration-200">
                        Check Address
                    </button>
                </div>
                <div className="m-auto">
                    <p className="text-white font-bold">Result:</p>
                </div>
                <Image src="/logos/bitcoin.png" alt="bitcoin" width={20} height={20}/>
                <Image src="/logos/ethereum.png" alt="ethereum" width={20} height={20}/>
                <Image src="/logos/polkadot.png" alt="polkadot" width={20} height={20}/>
            </div>
        </>
    );
}
export const Main = () => {
    return (
        <>
            <div>
                <h1 className="text-white font-bold text-4xl">Crypto Address Validator</h1>
                <div className="mt-5">
                    <div className="mt-1 mb-5">
                        <label htmlFor="blockchain" className="text-white text-base font-semibold">Select Blockchain</label>
                        <select name="blockchain" id="blockchain" className="bg-[#2f2f2f] text-gray-400 text-sm rounded-3xl w-full px-1 py-2 font-semibold shadow-gray-600 shadow-md mt-3">
                            <option value="bitcoin">Bitcoin</option>
                            <option value="ethereum">Ethereum</option>
                            <option value="Polkadot">Polkadot</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="address" className="text-white text-base font-semibold">Enter Address</label>
                        <input type="text" name="address" id="address" placeholder="Paste your address here..." className="bg-[#2f2f2f] text-gray-400 text-sm rounded-3xl w-full px-1 py-2 font-semibold shadow-gray-600 shadow-md mt-3"/>
                    </div>
                </div>
                <button className="mt-6 bg-white text-gray-500 rounded-3xl w-full py-2 font-semibold text-sm">
                    Check Address
                </button>
            </div>
        </>
    );
}
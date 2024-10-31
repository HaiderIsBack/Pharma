

const Prescription = () => {
    return (
        <div className="grid grid-cols-12 rounded-lg overflow-hidden border-[1px] border-blue-700" id="prescription-section">
            <div className="col-span-12 lg:col-span-5 grid grid-cols-4 bg-blue-700 text-white py-5 px-3">
                <div className="col-span-1 flex justify-center items-center">
                    <img src="/prescription.svg" alt="Prescription Icon" className="w-[50px]" />
                </div>
                <div className="col-span-3 flex flex-col justify-center">
                    <h5 className="text-xl font-bold">Order with Prescription</h5>
                    <p className="text-sm">Upload prescription and we will deliver medicine to you.</p>
                    <button className="bg-white text-blue-700 w-[150px] py-2 px-5 rounded-lg mt-5">Upload</button>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-7 py-5 px-3">
                <h5 className="text-md font-bold mb-3">How it works</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <p className="my-3"><span className="text-sm md:text-md px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-lg">1</span> Upload a photo of your prescription</p>
                    <p className="my-3"><span className="text-sm md:text-md px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-lg">2</span> Add delivery address and place order</p>
                    <p className="my-3"><span className="text-sm md:text-md px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-lg">3</span> We'll call you to confirm</p>
                    <p className="my-3"><span className="text-sm md:text-md px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-lg">4</span> Your medicines will get to your doorstep.</p>
                </div>
            </div>
        </div>
    );
}

export default Prescription;
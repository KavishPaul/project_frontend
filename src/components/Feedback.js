export default function Feedback() { 
    return( 
        <div className="absolute mt-60 ml-40 w-96 float-left border-2 p-2 rounded-xl shadow-xl text-xl"> 
            <form> 
                <p className="text-2xl">Feedback & Queries</p> 
                <div> 
                    <label className="text-sm">Select Issue*</label> 
                    <br></br> 
                    <select className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:border-#003B95 w-full p-2.5"> 
                        <option value="Feedback"> 
                            -- Select Your Query -- 
                        </option> 
                        <option value="Feedback"> 
                            Feedback 
                        </option> 
                        <option value="Feedback"> 
                            Payment Related Issue 
                        </option> 
                        <option value="Feedback"> 
                            Other Queries 
                        </option> 
                    </select> 
                    <br></br> 
                    <label className="text-sm">Email Address*</label> 
                    <br></br> 
                    <input className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-#003B95 w-full p-2.5" type="email" placeholder="abc@gmail.com"/> 
                    <br></br> 
                    <label className="text-sm">Contact No.</label> 
                    <br></br> 
                    <input className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-#003B95 w-full p-2.5" type="text" placeholder="1324567890"/> 
                    <br></br> 
                    <label className="text-sm">Drop Your Query</label> 
                    <br></br> 
                    <textarea className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-#003B95 w-full p-2.5" rows="4" cols="25" maxLength="300" placeholder="Max Allowed Characters: 300"></textarea> 
                    
                    <div className="flex justify-center py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
                        Submit
                    </button>
                    </div>
                </div> 
            </form> 
        </div>
    );
}
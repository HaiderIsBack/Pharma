import { EmailOutlined, EmailSharp, LocationOnOutlined, PhoneOutlined } from "@mui/icons-material";
import GoogleMap from "../GoogleMap";


const ContactUs = () => {
    return (
        <>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="flex flex-col gap-3 px-3 lg:px-0">
                <p className="text-blue-700 font-bold text-sm md:text-md">Contact Us</p>
                <h1 className="text-3xl md:text-5xl font-bold">Want to Enquiry</h1>
                <p className="text-gray-500 text-sm md:text-md mb-5">Feel free to get in touch with us</p>
                <div className="flex items-center gap-2">
                    <LocationOnOutlined className="text-blue-700" style={{fontSize: "40px"}} />
                    <div className="flex flex-col text-sm md:text-md">
                        <h6>Address</h6>
                        <p className="text-gray-500">Near Gourmet Bakery, Shadman, Jail Road, Lahore</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <PhoneOutlined className="text-blue-700" style={{fontSize: "40px"}} />
                    <div className="flex flex-col text-sm md:text-md">
                        <h6>Phone</h6>
                        <p className="text-gray-500">+92327-8848936</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <EmailOutlined className="text-blue-700" style={{fontSize: "40px"}} />
                    <div className="flex flex-col text-sm md:text-md">
                        <h6>Email</h6>
                        <p className="text-gray-500">info@goli.com</p>
                    </div>
                </div>

                <div className="mt-5">
                    <GoogleMap />
                </div>
            </div>
            <form action="" className="p-10">
                <div className="flex flex-col my-5">
                    <label htmlFor="fullname" className="text-blue-700 mb-2">Your Name</label>
                    <input type="text" id="fullname" className="w-full bg-white border-[1px] border-blue-700 text-blue-700 outline-none rounded-lg p-3" />
                </div>
                <div className="flex flex-col my-5">
                    <label htmlFor="email" className="text-blue-700 mb-2">Your Email</label>
                    <input type="text" id="email" className="w-full bg-white border-[1px] border-blue-700 text-blue-700 outline-none rounded-lg p-3" />
                </div>
                <div className="flex flex-col my-5">
                    <label htmlFor="subject" className="text-blue-700 mb-2">Subject</label>
                    <input type="text" id="subject" className="w-full bg-white border-[1px] border-blue-700 text-blue-700 outline-none rounded-lg p-3" />
                </div>
                <div className="flex flex-col my-5">
                    <label htmlFor="message" className="text-blue-700 mb-2">Your Message</label>
                    <textarea type="text" id="message" className="w-full bg-white border-[1px] border-blue-700 text-blue-700 outline-none rounded-lg p-3 resize-none" rows={5}></textarea>
                </div>
                <button type="submit" className="border-[1px] border-blue-700 hover:text-white px-10 py-3 text-blue-700 shop-now-btn overflow-hidden before:bg-gradient-to-tr before:from-blue-700 before:to-blue-700 relative duration-300 rounded-lg">Submit</button>
            </form>
        </div>
        </>
    );
}

export default ContactUs;
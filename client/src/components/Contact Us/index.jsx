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
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.447888070609!2d74.32870097442614!3d31.539320646207674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904958d88f07b%3A0x489650f4e9cb0cc3!2sSigma%20Engineering%20Services!5e0!3m2!1sen!2s!4v1728463706521!5m2!1sen!2s" width="100%" height="300" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
            </div>
            <form action="" className="p-10">
                <div className="flex flex-col my-5">
                    <label htmlFor="fullname" className="text-blue-700 font-semibold mb-2">Your Name</label>
                    <input type="text" id="fullname" className="w-full bg-white border-[1px] border-blue-700 text-blue-700 outline-none rounded-lg p-3" />
                </div>
                <div className="flex flex-col my-5">
                    <label htmlFor="email" className="text-blue-700 font-semibold mb-2">Your Email</label>
                    <input type="text" id="email" className="w-full bg-white border-[1px] border-blue-700 text-blue-700 outline-none rounded-lg p-3" />
                </div>
                <div className="flex flex-col my-5">
                    <label htmlFor="subject" className="text-blue-700 font-semibold mb-2">Subject</label>
                    <input type="text" id="subject" className="w-full bg-white border-[1px] border-blue-700 text-blue-700 outline-none rounded-lg p-3" />
                </div>
                <div className="flex flex-col my-5">
                    <label htmlFor="message" className="text-blue-700 font-semibold mb-2">Your Message</label>
                    <textarea type="text" id="message" className="w-full bg-white border-[1px] border-blue-700 text-blue-700 outline-none rounded-lg p-3 resize-none" rows={5}></textarea>
                </div>
                <button type="submit" className="border-[1px] border-blue-700 hover:text-white px-10 py-3 text-blue-700 shop-now-btn overflow-hidden before:bg-gradient-to-tr before:from-blue-700 before:to-blue-700 relative duration-300">Submit</button>
            </form>
        </div>
        </>
    );
}

export default ContactUs;
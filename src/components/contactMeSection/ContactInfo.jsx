import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="obanijesujohn45@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+2 01000 66 24 55" Image={FiPhone} />
      <SingleInfo text="Nigeria, Oyo State" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;


import { motion } from 'framer-motion';

interface PhoneMockupProps {
  imageSrc?: string;
}

export default function PhoneMockup({ imageSrc = "/placeholder.svg" }: PhoneMockupProps) {
  return (
    <motion.div
      className="relative mx-auto w-[280px] h-[580px]"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[40px] border-8 border-gray-800 bg-gray-800 shadow-lg overflow-hidden z-10">
        {/* Screen */}
        <div className="absolute inset-0 bg-white overflow-hidden rounded-[32px]">
          {/* Status bar */}
          <div className="h-6 w-full bg-gray-100 flex items-center justify-between px-5">
            <div className="w-16 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-6 h-2 bg-gray-300 rounded-full"></div>
          </div>
          
          {/* App content */}
          <div className="h-[calc(100%-24px)] overflow-hidden">
            <img
              src={imageSrc}
              alt="CliniSync App"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Phone details */}
      <div className="absolute top-[24px] left-1/2 transform -translate-x-1/2 w-[100px] h-[25px] bg-black rounded-b-[14px] z-20">
        <div className="absolute top-[8px] left-1/2 transform -translate-x-1/2 w-[50px] h-[8px] bg-gray-700 rounded-full"></div>
      </div>
      
      {/* Buttons */}
      <div className="absolute top-[100px] -right-[5px] w-[5px] h-[60px] bg-gray-700 rounded-r-sm z-20"></div>
      <div className="absolute top-[180px] -left-[5px] w-[5px] h-[60px] bg-gray-700 rounded-l-sm z-20"></div>
    </motion.div>
  );
}

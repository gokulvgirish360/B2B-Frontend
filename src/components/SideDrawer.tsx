import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import { TopRightArrow } from "./svg-assets/asset";

// {
//   notificationHandler,
//   isUser,
//   setNotificationCount,
// }: {
//   notificationHandler: (type: boolean) => void;
//   isUser: boolean;
//   setNotificationCount: (count: number) => void;
// }

const SideDrawer = ({
  setDrawerVisibility,
}: {
  setDrawerVisibility: (state: boolean) => void;
}) => {
  return (
    <motion.div
      className="w-full h-full fixed top-0 right-0 bg-gray-800 bg-opacity-0  overflow-y-auto"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: "0%" }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.5 }}
      style={{ zIndex: 80 }}
    >
      <div className="w-full h-full flex justify-end">
        <motion.div
          className="w-[100%] md:w-[48%] bg-white h-screen overflow-y-auto p-8 shadow-lg "
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-end ">
            <button
              aria-label="close modal"
              onClick={() => setDrawerVisibility(false)}
              className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full  cursor-pointer md:px-10"
            >
              <RxCross1 className="text-black h-4 w-4 sm:h-7 sm:w-7" />
            </button>
          </div>

          <div>
            <ul className="text-[1.3rem] sm:text-[2.5rem] text-left pt-8 md:pt-0 font-redhat font-[400] md:pl-6">
              <li className="py-3 px-3 hover:text-[#36644F] cursor-pointer group flex items-center gap-2">
                Get in touch
                <TopRightArrow className="transition-colors duration-300 delay-500 group-hover:fill-[#36644F] ml-3 sm:ml-8 sm:h-8 h-4" />
              </li>
              <li className="py-3 px-3 hover:text-[#36644F] cursor-pointer group flex items-center">
                Re-leased product
                <TopRightArrow className="transition-colors duration-300 delay-500 group-hover:fill-[#36644F] ml-3 sm:ml-8 sm:h-8 h-4" />
              </li>
              <li className="py-3 px-3 hover:text-[#36644F] cursor-pointer group flex items-center">
                About us
                <TopRightArrow className="transition-colors duration-300 delay-500 group-hover:fill-[#36644F] ml-3 sm:ml-8 sm:h-8 h-4" />
              </li>
              <li className="py-3 px-3 hover:text-[#36644F] cursor-pointer group flex items-center gap-2">
                FAQ
                <TopRightArrow className="transition-colors duration-300 delay-500 group-hover:fill-[#36644F] ml-3 sm:ml-8 sm:h-8 h-4" />
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SideDrawer;

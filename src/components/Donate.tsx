import { motion } from "framer-motion";

import weChat from "../assets/images/weChat.jpg";
import alipay from "../assets/images/mayi.jpg";
import afdian from "../assets/images/afdian.png";

export const Donate = () => (
  <section className="py-12 sm:py-24 bg-customDarkBg1 w-full mt-16 mb-16" id="donate">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="flex flex-col items-center justify-center">
              <h2 className="mb-2  text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-white">
                Support us by
              </h2>
              <h2 className=" text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-customSecondary">
                donating
              </h2>
              <div className="w-40 sm:w-40 h-12 mt-5 rounded-md font-bold text-white border border-solid flex justify-center items-center cursor-pointer bg-customPrimary border-customPrimary hover:bg-customSecondary transition">
                  afdian
              </div>
            </div>
          </div>
          <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
            <div className="md:flex justify-center items-center -m-4 sm:flex-wrap">
              <div className="flex flex-col justify-center items-center mb-4 py-3 pl-3 pr-2 rounded">
                <div className="text-white text-center mb-2">WeChat</div>
                <img
                  src={weChat}
                  alt="weChat"
                  className="w-28 h-28 rounded-xl bg-[#303136] custom-border-gray sm:mx-unset"
                />
              </div>
              <div className="flex flex-col justify-center items-center mb-4 py-3 pl-3 pr-2 rounded">
                <div className="text-white text-center mb-2">Alipay</div>
                <img
                  src={alipay}
                  alt="alipay"
                  className="w-28 h-28 rounded-xl bg-[#303136] custom-border-gray sm:mx-unset"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

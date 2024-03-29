import { motion } from "framer-motion";

import { ChromeIcon } from "../assets/icons/ChromeIcon";
import { FirefoxIcon } from "../assets/icons/FirefoxIcon";
import { EdgeIcon } from "../assets/icons/EdgeIcon";
import { GithubIcon } from "../assets/icons/GithubIcon";

export const Hero = () => {
  const toChrome = () => {
    window.open('https://chrome.google.com/webstore/detail/video-roll/cokngoholafkeghnhhdlmiadlojpindm')
  };

  const toEdge = () => {
    window.open('https://microsoftedge.microsoft.com/addons/detail/video-roll/indeeigndpaahbcegcanpmbenmkbkmmn')
  };

  const toFirefox = () => {
    window.open('https://addons.mozilla.org/en-US/firefox/addon/videoroll/')
  };

  return (
    <section
      className="w-screen h-screen flex justify-center items-center bg-customDarkBg1 mb-[4vw] hero-bg-gradient pb-24 sm:pb-32 md:pb-32 lg:pb-0"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="xs:w-[150px] xs:h-[150px] md:w-[250px] md:h-[250px] sm:text-base mb-2 md:mt-[200px] xs:mt-[200px] sm:mt-[200px] mt-16 font-bold">
            <img src="/logo.png" width="100%" height="100%"></img>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="mt-2 sm:mt-2 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-white px-8 sm:px-20 md:px-24 lg:px-24">
            Video Roll
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-customGrayText text-xl mt-5 px-50 sm:px-68 ">
            Easily enhance your video watching experience.
          </div>
          <div className="text-customGrayText mt-2 sm:mt-2 text-xl sm:text-xl lg:text-xl xl:text-xl tracking-wide px-8 sm:px-20 md:px-24 lg:px-24">
          The choice of over <span className="text-customSecondary font-bold">10k</span> users 
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <div
              className="w-40 sm:w-40 h-12 rounded-md font-bold text-white border border-solid  flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-customPrimary transition"
              onClick={toChrome}
            >
              <ChromeIcon></ChromeIcon>
              <span className="ml-2">Chrome</span>
            </div>
            <div
              className="w-40 sm:w-40 h-12 rounded-md font-bold text-white border border-solid  flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-customPrimary transition"
              onClick={toEdge}
            >
              <EdgeIcon></EdgeIcon>
              <span className="ml-2">Edge</span>
            </div>
            <div
              className="w-40 sm:w-40 h-12 rounded-md font-bold text-white border border-solid  flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-customPrimary transition"
              onClick={toFirefox}
            >
              <FirefoxIcon></FirefoxIcon>
              <span className="ml-2">Firefox</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

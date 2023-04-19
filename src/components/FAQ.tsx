import { useState } from "react";
import { motion } from "framer-motion";

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
            Have any questions?
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            <div className="w-full p-1">
              <FAQBox
                title="Why didn't it work?"
                content="First of all, you need to notice that Video Roll will do nothing when a page has not loaded yet. Please check the badge of the extension icon, only if it appears to be greater than one. The number represents the identified video element of the current page. If everything is right, please refresh the page and try again."
                defaultOpen
              />
            </div>
            <div className="w-full p-1">
              <FAQBox
                title="Why shortcut key is invalid?"
                content="You must active the extension at first, then shortcut key will be prapared. You can click the extension icon or go to chrome://extensions/shortcuts to set it."
              />
            </div>
            <div className="w-full p-1">
              <FAQBox
                title="Will it steal my information?"
                content="Absolutely not! Video Roll is a little guy that only focus on how to enhance your video watching experience and it's completely open source. If you are still worried about it, you can go check its code. It won't even make any requests!"
              />
            </div>
            <div className="w-full p-1">
              <FAQBox
                title="How to contribute?"
                content="First of all, if you've read this far, thank you very much. You can make a donation to me, any donation amount is appreciated. Also you can ask questions or contribute code on github."
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"
            }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
            }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};

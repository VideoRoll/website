import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/Артемий Фаст.png";
import testimonial2 from "../assets/images/言川.png";
import testimonial3 from "../assets/images/安澜洪.jpg";

const testimonialsData = [
  {
    customerName: "Артемий Фаст",
    customerTitle: "Chrome User",
    content:
      "Probably the best extension I've ever installed, thank you",
    image: testimonial1,
  },
  {
    customerName: "言川",
    customerTitle: "Chrome User",
    content:
      "体验最完美的旋转工具",
    image: testimonial2,
  },
  {
    customerName: "安澜洪",
    customerTitle: "Chrome User",
    content:
      "太棒了，YouTube上很有用，全屏问题的也解决了，赞",
    image: testimonial3,
  },
];

export const Reviews = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="reviews" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Reviews
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          People like you love Video Roll
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="h-28 custom-content-text-white">
                "{testimonial.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <img className="rounded" src={testimonial.image} alt="" width="45px" />
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="custom-content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

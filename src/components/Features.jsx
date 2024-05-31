// import featuredImg from "../assets/featuredImg.png";
import healthy from "../assets/healthy.png";
import customer from "../assets/customer.png";
import quality from "../assets/quality.png";

import { motion } from "framer-motion";
import { fadeIn } from "../shared/variants";

function Features() {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="feature">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="lg:w-1/4"
        >
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
            Why We are The Best Choice
          </h3>
          <p className="text-base text-tertiary">
            At Adejoke Bliss, our commitment to quality, innovation, and
            customer satisfaction distinguishes us. We use the finest
            ingredients, continuously explore new flavors, and prioritize
            personalized service to exceed your expectations, ensuring every
            product is exceptional and every experience delightful.
          </p>
        </motion.div>
        {/* Feature cards */}
        <div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <div className="bg-[rgba(255,255,255,0.24)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img
                  src={quality}
                  alt="Feature 1"
                  className="w-40 h-40 object-cover mx-auto"
                />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Exceptional Quality
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.24)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
              <div>
                <img
                  src={healthy}
                  alt="Feature 2"
                  className="w-40 h-40 object-cover mx-auto"
                />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Healthy and Delicious Options
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.24)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img
                  src={customer}
                  alt="Feature 3"
                  className="w-40 h-40 object-cover mx-auto"
                />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Customer Satisfaction
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

import featuredImg from "../assets/featuredImg.png";
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
            We are better than others
          </h3>
          <p className="text-base text-tertiary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            voluptate quia similique autem eum quasi quis quo exercitationem
            soluta optio eius perspiciatis, odio aperiam doloremque repudiandae
            explicabo laudantium laborum error.
          </p>
        </motion.div>
        {/* Feature cards */}
        <div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <div className="bg-[rgba(255,255,255,0.24)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img src={featuredImg} alt="Feature 1" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Convenient study schedule
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.24)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
              <div>
                <img src={featuredImg} alt="Feature 2" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Convenient study schedule
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.24)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img src={featuredImg} alt="Feature 3" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Convenient study schedule
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

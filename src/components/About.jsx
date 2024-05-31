import aboutImg from "../assets/aboutImg.png";
import delivery from "../assets/delivery.png";
import decoration from "../assets/decoration.png";
import { motion } from "framer-motion";
import { fadeIn } from "../shared/variants";
function About() {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-8" id="about">
      <div className="text-center mb-10">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
          Services
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img src={decoration} alt="" />
        </motion.div>

        {/* about content */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-2/5"
        >
          <h2 className="md:text-5 text-3xl font-bold text-primary mb-5 leading-normal">
            Event Decoration <span className="text-secondary">Services</span>
          </h2>
          <p className="text-tertiary text-lg mb-7">
            Transform your event with our creative decoration services. From
            stunning floral arrangements and custom lighting to elegant draping
            and personalized signage, we handle every detail. Our unique designs
            ensure your event is memorable and visually captivating, tailored
            perfectly to your theme and style..
          </p>
          <button className="btnPrimary">Get Started</button>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img src={aboutImg} alt="" />
        </motion.div>

        {/* about content */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <h2 className="md:text-5 text-3xl font-bold text-primary mb-5 leading-normal">
            Sweet Delights <span className="text-secondary">Baking</span>
          </h2>
          <p className="text-tertiary text-lg mb-7">
            I use the finest ingredients to create irresistibly delicious and
            beautiful baked goods. From custom cakes and classic donuts to
            perfect pies, chin chin, plantain chips, and small chops, every item
            is crafted with love and attention to detail, ensuring a delightful
            experience for every palate.
          </p>
          <button className="btnPrimary">Get Started</button>
        </motion.div>
      </div>

      {/* third part */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img src={delivery} alt="" />
        </motion.div>

        {/* about content */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <h2 className="md:text-5 text-3xl font-bold text-primary mb-5 leading-normal">
            Delivery and <span className="text-secondary">Setup</span>
          </h2>
          <p className="text-tertiary text-lg mb-7">
            Ensure a seamless experience with our professional delivery and
            setup services. We handle the transportation, assembly, and
            arrangement of all necessary elements, ensuring everything is
            perfectly in place. Relax and enjoy your event or project while we
            manage the logistics and ensure flawless execution.
          </p>
          <button className="btnPrimary">Get Started</button>
        </motion.div>
      </div>
    </div>
  );
}

export default About;

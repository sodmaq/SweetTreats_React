import aboutImg from "../assets/aboutImg.png";
import { motion } from "framer-motion";
import { fadeIn } from "../shared/variants";
function About() {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2">
          <img src={aboutImg} alt="" />
        </div>

        {/* about content */}
        <div className="md:w-2/5">
          <h2 className="md:text-5 text-3xl font-bold text-primary mb-5 leading-normal">
            we have been improving our product{" "}
            <span className="text-secondary">for many years</span>
          </h2>
          <p className="text-tertiary text-lg mb-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            doloremque quia voluptates inventore totam quo? Optio, quos sint.
            Nisi est totam aspernatur molestias saepe distinctio exercitationem
            quaerat natus perspiciatis libero.
          </p>
          <button className="btnPrimary">Get Started</button>
        </div>
      </div>

      {/* second part */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img src={aboutImg} alt="" />
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
            we have been improving our product{" "}
            <span className="text-secondary">for many years</span>
          </h2>
          <p className="text-tertiary text-lg mb-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            doloremque quia voluptates inventore totam quo? Optio, quos sint.
            Nisi est totam aspernatur molestias saepe distinctio exercitationem
            quaerat natus perspiciatis libero.
          </p>
          <button className="btnPrimary">Get Started</button>
        </motion.div>
      </div>
    </div>
  );
}

export default About;

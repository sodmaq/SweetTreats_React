import aboutImg from "../assets/aboutImg.png";
function About() {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto">
      <div>
        <div className="md:w-1/2">
          <img src={aboutImg} alt="" />
        </div>

        {/* about content */}
        <div>
          <h2 className="md:text-5 text-3xl font-bold text-primary mb-5 leading-normal">
            we have been improving our product <span>for many years</span>
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
    </div>
  );
}

export default About;

import aboutImg from "../assets/aboutImg.png";
function About() {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto">
      <div>
        <div className="md:w-1/2">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;

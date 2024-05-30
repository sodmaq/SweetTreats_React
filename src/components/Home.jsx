import banner from "../assets/banner.png";
import Banner from "../shared/Banner";

function Home() {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
      <Banner
        banner={banner}
        heading="Adejoke Bliss"
        subheading="Welcome to the online portfolio of Yekini Zainub, a passionate baker, culinary enthusiast, and dedicated marketing student. With a flair for creating delectable cakes, savory small chops, rich cocoa treats, and crispy plantain chips, Yekini Zainub combines her culinary skills with marketing expertise to deliver exceptional products."
        btn1="Contact"
        btn2="My Cv"
      />
    </div>
  );
}

export default Home;

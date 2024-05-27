import banner from "../assets/banner.png";
import Banner from "../shared/Banner";

function Home() {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24">
      <Banner
        banner={banner}
        heading="Develop your skills without deligence"
        subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        similique possimus culpa consequatur, suscipit laborum officiis
        voluptatum enim molestias obcaecati ut placeat libero molestiae dolore
        delectus dolorem asperiores fugit alias!"
        btn1="Get Started"
        btn2="Discount"
      />
    </div>
  );
}

export default Home;

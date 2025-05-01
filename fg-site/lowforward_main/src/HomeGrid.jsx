import HomeItem from "./HomeItem.jsx";
import Logo from "../src/assets/images/Logo.png";
import meditation from "../src/assets/images/meditation.png";

export default function HomeGrid() {
  return (
    <section className="text-white py-16 px-4 md:px-12">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Explore Our Core Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-[250px] md:h-[300px] mb-10 md:mb-0">
            <HomeItem
              img={Logo}
              title="Form and implement an unstoppable strategy in fighting games."
              page="#/concepts"
              buttonText="Explore Concepts"
            />
          </div>
          <div className="h-[250px] md:h-[300px]">
            <HomeItem
              img={meditation}
              title="Need to brush up on your fighting game terminology or need some character resources?"
              page="#/resources"
              buttonText="Explore Resources"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

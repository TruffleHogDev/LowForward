import { Helmet } from "react-helmet";
import HomeNav from "./HomeNav.jsx";
import BnbBanner from "./banners/BnbBanner.jsx";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Learn Fighting Games - Strategies & Resources | LowForward
        </title>
        <meta
          name="description"
          content="LowForward - Your SF6 Learning Hub: Strategies, Beginner Guides, Resources, and More"
        />
      </Helmet>
      <BnbBanner />
      <div className="container">
        <HomeNav />
      </div>
    </>
  );
}

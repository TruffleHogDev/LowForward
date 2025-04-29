import { Helmet } from "react-helmet";
import HeroBanner from "./HeroBanner.jsx";
import HomeGrid from "./HomeGrid.jsx";
import HomeSupport from "./HomeSupport.jsx";
import SuggestedArticle from "./SuggestedArticle.jsx";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Learn Fighting Games - Guides & Resources | LowForward</title>
        <meta
          name="description"
          content="LowForward - Your SF6 Learning Hub: Strategies, Beginner Guides, Resources, and More"
        />
      </Helmet>
      <HeroBanner />
      <HomeGrid />
      <SuggestedArticle />
      <HomeSupport />
    </>
  );
}

import message from "../public/images/message.png";
import Banner from "../components/Home/Banner";
import Project from "../components/Home/Project";
import Fund from "../components/Home/Fund";
import Statistical from "../components/Home/Statistical";
import AboutUs from "../components/Home/AboutUs";
import Club from "../components/Home/Club";
import Partner from "../components/Home/Partner";


export default function Home() {
  return (
    <>
      <Banner />
      <Project />
      <Fund />
      <Statistical />
      <AboutUs />
      <Club />
      <Partner />
      <div className="  mt-5 gap-0">
        <Banner />
      </div>
      <div className="w-16 fixed bottom-5 right-5">
        <img src={message.src} />
      </div>
    </>
  );
}

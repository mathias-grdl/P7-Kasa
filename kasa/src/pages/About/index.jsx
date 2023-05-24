import Banner from "../../components/Banner";
import bannerImg from "../../asset/images/bannerAbout.svg";

function About() {
  const banner = {
    img: bannerImg,
    style: "bannerBig",
    text: ""
  }
  
  return (  
      Banner(banner)
  )
}

export default About;

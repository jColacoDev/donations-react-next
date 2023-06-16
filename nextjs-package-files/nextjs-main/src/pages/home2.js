import BrandOne from "@/components/BrandOne/BrandOne";
import CausesTwo from "@/components/CausesTwo/CausesTwo";
import Counters from "@/components/Counters/Counters";
import EventsOne from "@/components/EventsOne/EventsOne";
import FourIcon from "@/components/FourIcon/FourIcon";
import GalleryOne from "@/components/GalleryOne/GalleryOne";
import Introduction from "@/components/Introduction/Introduction";
import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/MainSliderTwo/MainSliderTwo";
import NewsTwo from "@/components/NewsTwo/NewsTwo";
import Volunteer from "@/components/Volunteer/Volunteer";
import WeInspire from "@/components/WeInspire/WeInspire";

const Home2 = () => {
  return (
    <Layout pageTitle="Início">
      <MainSliderTwo />
      <Introduction />
      <FourIcon />
      <WeInspire />
      <BrandOne />
      <EventsOne />
      <Volunteer />
      <CausesTwo />
      <Counters />
      <NewsTwo />
      <GalleryOne className="gallery-two" />
    </Layout>
  );
};

export default Home2;

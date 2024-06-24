import "./App.css";
import { Contact } from "./Components/Contact/Contact";
import { GalleryImages } from "./Components/GalleryImages/GalleryImages";
import { Header } from "./Components/Header/Header";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import { OurPlans } from "./Components/OurPlans/OurPlans";
import { Ourclasses } from "./Components/Ourclasses/Ourclasses";
import { RegisterNow } from "./Components/RegisterNow/RegisterNow";
import { Testimonials } from "./Components/Testimonials/Testimonials";
import { Trainers } from "./Components/Trainers/Trainers";
import Trainersdata from "./Components/Trainersdata/Trainersdata";
import { Whyus } from "./Components/Whyus/Whyus";

const slides = [
  {
    image: "Images/banner 1.jpg",
    text: "This is the first slide",
  },
  {
    image: "Images/banner 2.jpg",
    text: "This is the second slide",
  },
];

const trainers = [
  {
    src: "https://themewagon.github.io/gymlife/img/gallery/gallery-5.jpg",
    name: "John Doe",
    designation: "Fitness Trainer",
  },
  {
    src: "https://themewagon.github.io/gymlife/img/gallery/gallery-4.jpg",
    name: "Jane Smith",
    designation: "Yoga Instructor",
  },
  {
    src: "https://themewagon.github.io/gymlife/img/gallery/gallery-2.jpg",
    name: "Mike Johnson",
    designation: "Personal Trainer",
  },
  // Add more trainers as needed
];

function App() {
  return (
    <div>
      <Header />
      <ImageSlider slides={slides} />
      <Whyus />
      <Ourclasses />
      <RegisterNow />
      <OurPlans />
      <GalleryImages />
      {/* <Trainers /> */}
      {/* <Trainersdata trainers={trainers} /> */}
      {/* <Contact /> */}
      <Testimonials />
    </div>
  );
}

export default App;

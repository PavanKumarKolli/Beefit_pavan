import "./App.css";
import { Header } from "./Components/Header/Header";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import { Ourclasses } from "./Components/Ourclasses/Ourclasses";
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

function App() {
  return (
    <div>
      <Header />
      <ImageSlider slides={slides} />
      <Whyus />
      <Ourclasses />
    </div>
  );
}

export default App;

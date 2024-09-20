import { CoverDemo } from "./components/CoverText";
import Header from "./components/Header";
import { ImagesSliderDemo } from "./components/ImagesSliderDemo";
import { ProductsFocusCards } from "./components/Products";

export default function Home() {
  return (
    <>
    <Header/>
    <CoverDemo/>
    <ProductsFocusCards/>
    <ImagesSliderDemo/>
    </>
  );
}

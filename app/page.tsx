import BtnPage from "./page/btnPage";
import Footer from "./page/footer";
import Cards from "./page/Cards";
import Header from "./page/header";
import HeroPage from "./page/heroPage";
import InputPage from "./page/InputPage";
export default function Home() {
  return (
    <main>
      <Header />
      <HeroPage />
      <InputPage />
      <Cards />
      <BtnPage />
      <Footer />
    </main>
  );
}

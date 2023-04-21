import { Header } from "../components/header";
import { SectionHero } from "../components/home/sectionHero";
import { ListCharacters } from "../components/home/ListCharacters";
import { CardCharacter } from "../components/cardCharacter";

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <ListCharacters />
    </>
  );
}

import Image from "next/image";
import { Container } from "../../../styles/global";
import { StyleSectionCharacters, StyleListCharacters } from "./styles";

import { CardCharacter } from "../../cardCharacter";
import ImageCharacter from "../../../assets/character.jpg";

const characters = [
  {
    name: "Killmonger",
    image: ImageCharacter,
    slug: "/killmonger",
  },
  {
    name: "Captain Carter",
    image: ImageCharacter,
    slug: "/captain-carter",
  },
  {
    name: "Captain Carter",
    image: ImageCharacter,
    slug: "/captain-carter",
  },
  {
    name: "Captain Carter",
    image: ImageCharacter,
    slug: "/captain-carter",
  },
  {
    name: "Captain Carter",
    image: ImageCharacter,
    slug: "/captain-carter",
  },
  {
    name: "Captain Carter",
    image: ImageCharacter,
    slug: "/captain-carter",
  },
  {
    name: "Captain Carter",
    image: ImageCharacter,
    slug: "/captain-carter",
  },
];

import LogoMarvel from "../../../assets/logo.svg";

export function ListCharacters() {
  return (
    <StyleSectionCharacters>
      <Container>
        <div className="title">
          <span>What if</span>
          <h2>Personagens Marvel</h2>
        </div>
        <StyleListCharacters>
          {characters.map(({ name, image, slug }) => {
            return (
              <CardCharacter key={name} slug={slug} image={image} name={name} />
            );
          })}

          <div className="marvel">
            <Image src={LogoMarvel} alt="Marvel Studios" />
          </div>
        </StyleListCharacters>
      </Container>
    </StyleSectionCharacters>
  );
}

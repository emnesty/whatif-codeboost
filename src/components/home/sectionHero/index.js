import { SectionHeroStyle, AreaSocial, ContextText } from "./styles";
import { Container } from "../../../styles/global";
import IconYouTube from "../../../assets/youtube.svg";
import IconInstagram from "../../../assets/instagram.svg";
import Image from "next/image";

const socials = [
  {
    name: "Youtube",
    url: "#",
    icon: IconYouTube,
  },
  {
    name: "Instagram",
    url: "#",
    icon: IconInstagram,
  },
];

export function SectionHero() {
  return (
    <SectionHeroStyle>
      <Container>
        <AreaSocial>
          <ul>
            {socials.map(({ name, url, icon }) => {
              return (
                <li key={"social-${name}"}>
                  <a href="url" target="_blank">
                    <Image src={icon} alt="name" />
                  </a>
                </li>
              );
            })}
          </ul>
        </AreaSocial>
        <ContextText></ContextText>
      </Container>
    </SectionHeroStyle>
  );
}

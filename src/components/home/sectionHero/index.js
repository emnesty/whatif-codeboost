import { SectionHeroStyle, AreaSocial, ContextText } from "./styles";
import { Container } from "../../../styles/global";
import IconYouTube from "../../../assets/youtube.svg";
import { PopupVideo } from "../../popupVideo";
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
        <ContextText>
          <div className="left">
            <h3>COMING SON</h3>
            <h1>Lorem ipsum dolor sit amet, elit consectetur</h1>
            <p>
              Maecenas tristique eu quam sed pretium. Pellentesque sagittis elit
              et porttitor consequat. Nam augue turpis, tincidunt commodo lacus
              at, auctor suscipit ex
            </p>
            <a href="" target="_blank">
              Saida mais
            </a>
          </div>
          <PopupVideo />
        </ContextText>
      </Container>
    </SectionHeroStyle>
  );
}

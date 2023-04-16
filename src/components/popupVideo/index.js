import Image from "next/image";
import { StyledPopupVideo } from "./styles";

import IconPlay from "../../assets/play.svg";

export function PopupVideo() {
  return (
    <StyledPopupVideo>
      <span>ASSISTA O TRAILER</span>
      <button>
        <div>
          <Image src={IconPlay} alt="Icon Play" />
        </div>
      </button>
    </StyledPopupVideo>
  );
}

import Link from "next/link";
import { StyleCard } from "./styles";

import Image from "next/image";

export function CardCharacter({ image, name, slug }) {
  return (
    <StyleCard>
      <Link href={`/character/${slug}`} legacyBehavior>
        <a>
          <div className="image">
            <Image src={image} alt="Character" />
          </div>
          <div className="info">
            <div>
              <h3>{name}</h3>
              <span>Marvel Studios</span>
            </div>
            <span>What if</span>
          </div>
        </a>
      </Link>
    </StyleCard>
  );
}

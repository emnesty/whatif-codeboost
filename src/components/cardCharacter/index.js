import Link from "next/link"
import { StyleCard } from "./styles"

import ImageCharacter from "../../assets/character.jpg"
import Image from "next/image"

export function CardCharacter() {
  return (
    <StyleCard>
      <Link href="#" legacyBehavior>
        <a>
          <div className="image">
            <Image 
            src={ImageCharacter} 
            alt="Character" 
            />
          </div>
          <div className="info">
            <div>
              <h3>T'Challa</h3>
              <span>Marvel Studios</span>
            </div>
            <span>What if</span>
          </div>
        </a>
      </Link>
    </StyleCard>
  )
}

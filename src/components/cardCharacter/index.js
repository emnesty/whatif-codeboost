import Link from "next/link"
import { StyleCard } from "./styles"

export function CardCharacter() {
  return (
    <StyleCard>
      <Link href="#" legacyBehavior>
        <a>About Us</a>
      </Link>
    </StyleCard>
  )
}

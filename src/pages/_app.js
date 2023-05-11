import { globalStyles } from "../styles/global"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

globalStyles()

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  )
}

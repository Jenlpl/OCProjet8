import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import Gallery from "../components/Gallery/Gallery"

export default function Home() {

  const currentPage = window.location.pathname;

    return (
      <main>
        <Banner page={currentPage} />
      <Gallery />
      </main>
    )
}
import Banner from "../../components/Banner/Banner"
import Gallery from "../../components/Gallery/Gallery"

export default function Home() {

  const currentPage = window.location.pathname;

    return (
      <main className="main-home">
        <Banner page={currentPage} />
      <Gallery />
      </main>
    )
}
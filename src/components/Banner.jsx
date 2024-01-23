import banner from "/src/assets/images/banner.png";

export default function Banner() {
    return (
        <div className="banner">
        <img src={banner} alt="banner" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    )
}
import { useLocation } from 'react-router-dom';
import BannerHome from "/src/assets/images/BannerHome.png";
import BannerAbout from "/src/assets/images/BannerAbout.png";


export default function Banner() {
  
  const location = useLocation();
  const { pathname } = location;
  let bannerImage;

  if (pathname === '/') {
    bannerImage = BannerHome;
  } else if (pathname === '/about') {
    bannerImage = BannerAbout;
  }

    return (
        <div className="banner">
        <img src={bannerImage} alt="banner" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    )
}
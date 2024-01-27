import logoFooter from "/src/assets/images/logo-footer.png";

export default function Footer() {
    return (
        <footer className="footer">
            <img src={ logoFooter } alt="" />
            <p className="copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
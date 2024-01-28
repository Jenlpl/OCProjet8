import logoFooter from "/src/assets/images/logo-footer.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div>
            <img src={ logoFooter } alt="" />
            </div>
            <p className="copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
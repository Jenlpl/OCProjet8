import logoFooter from "/src/assets/images/logo-footer.png";

export default function Footer() {
    return (
        <div className="footer">
            <img src={ logoFooter } alt="" />
            <p className="copyright">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}
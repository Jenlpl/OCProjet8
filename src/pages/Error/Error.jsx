import { Link } from "react-router-dom";

export default function Error() {
    return (
      <main className="main-error">
        <h1>404</h1>
        <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
        <Link to ='/' className="return">Retourner sur la page d’accueil</Link>
      </main>
    )
}
import Logements from '/logements.json'


export default function Gallery() {
    return (
        <main>
            <div className="gallery">
                {
                    Logements.map(logement => (
                        <div className='logement' key={logement.id}>
                            <h2>{logement.title}</h2> 
                            <img className='cover' src={logement.cover} alt="" />        
                        </div>
                    ))
                }
            </div>
        </main>
    )
    
}


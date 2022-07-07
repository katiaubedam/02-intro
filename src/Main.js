function Card(props) {
    return (
        <div className="card">
            <h2>{props.peli.titulo}</h2>
            <img src={props.peli.cartel} alt={props.peli.titulo} />
            <p>{props.peli.sinopsis}</p>
        </div>
    )
}

function Main(props) {

    let arrFinal = props.pelis.map((peli, index) => {
        return (<Card key={index} peli={peli} />)
    })

    return (
        <main>
            <div className="container">
                {arrFinal}
            </div>
        </main>
    )
}

export default Main;
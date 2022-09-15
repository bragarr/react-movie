import './Cabecalho.css'

function Cabecalho (){
    return (
        <header className="cabecalho">
            <img className="cabecalho__imagem" src="/img/reactMovie_logo.png" alt="logo"/>

            <nav className="menu">
            <ul>
                <li>
                    <a href="/home" className="menu__movies">movies</a>
                </li>
                <li>
                    <img className="menu__github" src="img/github.png" alt="logo__webpage"/>
                </li>
                <li>
                    <button className="menu__botao" type="submit">login</button>
                </li>
            </ul>
            </nav>
        </header>

    )
}

export default Cabecalho
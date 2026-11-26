import './Header.css'

function Header() {
    return (
        <>
            <header>
                <h1 class="titulo">Nintendo</h1>
                <input class="buscador" type="text"></input>
                <button class="login">Loggin</button>
                
            </header>
            <div class="area-optn">
                <ul class="lista">
                    <a href="/paginas/Zelda"><li>The Legend of Zelda Breath of the Wild</li></a>
                    <a href="/paginas/SuperMarioSunshine"><li>Super Mario Sunshine</li></a>
                    <a href=""><li>Nintendo switch 2</li></a>
                </ul>
            </div>
        </>
    )
}
export default Header;
import '../styles/header.css'

function Header() {
    return (

        <header className="header">
            <div className="container header__inner">
                <nav className="header__nav">
                    <a className="header__logo">Yeahub</a>
                    <a className="header__link">База вопросов</a>
                    <a className="header__link">Тренажер</a>
                    <a className="header__link">Материалы</a>
                </nav>

                <div className="header__actions">
                    <button className="btn btn--ghost">Вход</button>
                    <button className="btn btn--primary">Регистрация</button>
                </div>
            </div>



        </header>
    );
}

export default Header;
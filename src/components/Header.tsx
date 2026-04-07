function Header() {
    return (

        <nav style={{ display: 'flex', flexDirection: "row" }}>
            <div>
                <img src="" alt="" />
            </div>
            <ul style={{ display: "flex", flexDirection: "row" }}>
                <li>База вопросов</li>
                <li>Тренажор</li>
                <li>Материалы</li>
            </ul>
            <form action="submit" style={{ display: "flex", flexDirection: "row" }}>
                <button>Вход</button>
                <button>Регистрация</button>
            </form>
        </nav >
    );
}

export default Header;
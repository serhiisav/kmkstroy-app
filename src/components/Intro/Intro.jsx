import './intro.scss'


function Intro() {

    const styleBackground = {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/img/background-header-1.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        // backgroundSize: '100% auto',
        backgroundSize: 'cover',
        height: '100vh',
        backgroundAttachment: 'fixed'
    }
    return (
        <section className="section-intro" id="home"
            style={styleBackground}
        >
            <div className="section-intro-wrap">
                <h1 className="section-intro-title">ТОВ &laquo;КМКСТРОЙ&raquo;</h1>
                <p className="section-intro-subtitle">Будівельні роботи та</p>
                <p className="section-intro-subtitle">Промислові підлоги</p>
            </div>
        </section>
    )
}

export default Intro;
export const WelcomePage = () => {
    return (
        <main className="welcome">
            <div className="welcome__content">
                <div
                    className="welcome__logo"
                    style={{
                        backgroundImage: `url(/assets/brand/logo.svg)`,
                    }}
                />
                <h1 className="welcome__headline">Visio</h1>
            </div>
        </main>
    )
}

import { DefaultLayout } from '@layouts/default.layout'

export const WelcomePage = () => {
    return (
        <DefaultLayout>
            <main className="welcome">
                <div className="welcome__content"></div>
            </main>
        </DefaultLayout>
    )
}

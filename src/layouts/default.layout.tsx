import { ReactNode } from 'react'
import { Header } from '@components/sections/Header'

type Props = {
    children: ReactNode
}

export const DefaultLayout = ({ children }: Props) => (
    <>
        <Header />
        {children}
    </>
)

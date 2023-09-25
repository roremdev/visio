import { ReactNode } from 'react'

type Props = {
    label: string
    icon?: ReactNode
    onClick: () => void
}

export function Button({ label, icon, onClick }: Props) {
    return (
        <button className="button" type="button" onClick={onClick}>
            {icon}
            <span className="button__label">{label}</span>
        </button>
    )
}

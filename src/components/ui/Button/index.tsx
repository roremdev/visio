import { ReactNode } from 'react'

type Props = {
    label: string
    icon?: ReactNode
}

export function Button({ label, icon }: Props) {
    return (
        <button className="button" type="button">
            {icon}
            <span className="button__label">{label}</span>
        </button>
    )
}

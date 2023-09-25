import { useState, useEffect } from 'react'

type Props = {
    title: string
    message: string
    displayed?: boolean
    onChange: (state: boolean) => void
}

export function Toast({ title, message, displayed = true, onChange }: Props) {
    const [state, setState] = useState(displayed)

    const handleClick = () => {
        setState(!state)
        onChange(!state)
    }

    useEffect(() => {
        setState(displayed)
    }, [displayed])

    return (
        <div
            className={`${
                state ? 'toast' : 'toast toast--hide toast--translate'
            }`}
        >
            <div className="toast__container">
                <button className="toast__button" onClick={handleClick}>
                    <svg
                        className="toast__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="currentColor"
                        width="12"
                        height="12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M11,1L1,11 M1,1l10,10" />
                    </svg>
                </button>

                <span className="toast__title">{title}</span>
                <p className="toast__message">{message}</p>
            </div>
        </div>
    )
}

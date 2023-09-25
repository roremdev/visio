import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'

import { Button } from './index'

export default {
    title: 'Shared/Button',
    tags: ['autodocs'],
    argTypes: {
        showIcon: {
            name: 'Show icon',
            control: 'boolean',
            description: 'Show or hide the icon',
        },
        label: {
            name: 'Label',
            control: 'text',
            description: 'The button label',
        },
        handleClick: {
            action: 'clicked',
        },
    },
    args: {
        showIcon: true,
        label: 'Download',
    },
    render: ({ showIcon, label, handleClick }) => {
        return showIcon ? (
            <Button
                onClick={handleClick}
                label={label}
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        strokeWidth="2"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M1,11.7v1.6C1,14.3,1.8,15,2.8,15h10.5c1,0,1.8-0.7,1.8-1.6v-1.6" />
                        <path d="M3.6,6.8L8,10.9l4.4-4.1" />
                        <path d="M8,1v9.9" />
                    </svg>
                }
            />
        ) : (
            <Button onClick={handleClick} label={label} />
        )
    },
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const button = await canvas.findByRole('button', { name: 'Download' })
        await userEvent.click(button)
    },
}

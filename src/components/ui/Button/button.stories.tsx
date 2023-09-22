import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

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
    },
    args: {
        showIcon: true,
        label: 'Download',
    },
    render: ({ showIcon, label }) => {
        return showIcon ? (
            <Button
                label={label}
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        focusable="false"
                        aria-hidden="true"
                        role="img"
                    >
                        <path d="M12.372 7.289l-4.405 4.416a.357.357 0 01-.506 0L3.057 7.29a.357.357 0 010-.506l.583-.584a.353.353 0 01.509.006l2.788 2.89V1.69c0-.196.161-.357.358-.357h.833c.196 0 .357.161.357.357v7.405l2.789-2.89a.358.358 0 01.509-.006l.583.584c.146.14.146.366.006.506zm.7 5.83H2.356a.358.358 0 00-.357.357v.833c0 .197.16.358.357.358h10.714c.197 0 .358-.161.358-.357v-.834a.358.358 0 00-.358-.357z" />
                    </svg>
                }
            />
        ) : (
            <Button label={label} />
        )
    },
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const button = canvas.getByRole('button', { name: 'Download' })
        await userEvent.click(button)
    },
}

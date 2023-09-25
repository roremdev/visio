import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { Toast } from './index'

export default {
    title: 'Shared/Toast',
    tags: ['autodocs'],
    argTypes: {
        title: {
            name: 'Title',
            control: 'text',
            description: 'The toast title',
        },
        message: {
            name: 'Message',
            control: 'text',
            message: 'The toast message',
        },
        handleClick: {
            action: 'clicked',
        },

        showToast: {
            name: 'Show toast',
            control: 'boolean',
            description: 'Show or hide the toast',
        },
    },
    args: {
        title: 'Event Created',
        message: 'Todat at 4:00pm - "Louvre Museum"',
        showToast: true,
    },
    render: ({ title, message, showToast }) => {
        const [_, updateArgs] = useArgs()

        const handledChildChange = (state: boolean) => {
            updateArgs({ showToast: state })
        }

        return (
            <Toast
                title={title}
                message={message}
                displayed={showToast}
                onChange={handledChildChange}
            />
        )
    },
} as Meta

export const Default: StoryObj = {}

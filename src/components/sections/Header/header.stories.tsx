import type {Meta, StoryObj, Args} from '@storybook/react';
import {Header} from './index'

export default {
    title: 'Sections/Header',
    tags: ['autodocs'],
    argTypes: {
        headline: {
            name: 'Label',
            control: 'text',
            description: 'Headline text',
        }
    },
    args: {
        headline: 'Headline'
    },
    render: ({label}) => {
        return <Header headline={label} />
    },
} as Meta

export const Default: StoryObj = {}
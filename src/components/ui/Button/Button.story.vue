<script setup lang="ts">
import { reactive } from 'vue'
import Button from './Button.vue'

const state = reactive({
    showIcon: true,
    label: 'Button',
})
</script>

<template>
    <Story title="Button">
        <template #controls>
            <div class="p-1 column gap-1">
                <label class="row gap-1">
                    Show icon:
                    <input type="checkbox" v-model="state.showIcon" />

                    Label:
                    <input type="text" v-model="state.label" />
                </label>
            </div>
        </template>

        <Variant title="Outline" autoPropsDisabled>
            <Button modifier="outline">
                <template #icon="props">
                    <svg
                        v-if="state.showIcon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        stroke-width="2"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            d="M1,11.7v1.6C1,14.3,1.8,15,2.8,15h10.5c1,0,1.8-0.7,1.8-1.6v-1.6"
                        />
                        <path d="M3.6,6.8L8,10.9l4.4-4.1" />
                        <path d="M8,1v9.9" />
                    </svg>
                </template>
                <template #label="props">
                    <span :class="props.class">{{
                        state.label || 'Button'
                    }}</span>
                </template>
            </Button>
        </Variant>
    </Story>
</template>

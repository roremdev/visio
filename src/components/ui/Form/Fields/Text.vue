<script setup lang="ts">
import { computed } from 'vue'

const emit = defineEmits(['update:input', 'update:isValid'])
const props = defineProps<{
    label: string
    name: string
    helper?: string

    input: string
    isValid: boolean
}>()

const inputId = computed(() => `input_${props.name.trim().toLowerCase()}`)

const onChange = (e: Event) => {
    const value = (e.target as HTMLInputElement).value
    emit('update:input', value)
    emit('update:isValid', value.trim().length > 0)
}
</script>

<template>
    <section class="field">
        <div class="field__wrapper">
            <input
                :id="inputId"
                class="field__input"
                :class="!isValid && 'field__input--invalid'"
                name="name"
                :value="input"
                @input="onChange"
                placeholder=" "
            />
            <label
                class="field__label"
                :class="!isValid && 'field__label--invalid'"
                :for="inputId"
                >{{ label }}</label
            >
        </div>
        <transition>
            <span class="field__helper" v-if="!isValid">
                {{ helper ?? 'This field is required' }}
            </span>
        </transition>
    </section>
</template>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>

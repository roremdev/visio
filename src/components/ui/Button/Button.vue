<script setup lang="ts">
defineEmits(['on:click'])
defineProps<{
    modifier?: 'outline'
    type?: 'button' | 'submit' | 'reset'
}>()
</script>

<template>
    <button
        :class="[modifier ? `button button--${modifier}` : 'button']"
        @click="() => $emit('on:click')"
        :type="type ?? 'button'"
    >
        <slot name="icon" :class="'button__icon'" />
        <span class="button__label">
            <slot>Submit</slot>
        </span>
    </button>
</template>

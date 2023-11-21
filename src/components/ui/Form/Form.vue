<script setup lang="ts">
import SubmitButton from '@components/ui/Button/Button.vue'
import FieldText from '@components/ui/Form/Fields/Text.vue'
import { ref } from 'vue'

const name = ref({
    input: '',
    isValid: false,
})

const onSubmit = () => {
    if (name.value.input.trim().length > 0) {
        console.log('submit')
    }
}
</script>

<template>
    <form class="form">
        <header class="form__header">
            <h3 class="form__title">Register</h3>
        </header>
        <section class="form__body">
            <FieldText
                label="Name"
                name="name"
                v-model:input="name.input"
                v-model:is-valid="name.isValid"
            />
        </section>
        <section class="form__footer">
            <span class="form__helper">
                Sorry, not all fields are filled out correctly.
            </span>
            <SubmitButton @on:click="onSubmit" />
        </section>
        <p>{{ name }}</p>
    </form>
</template>

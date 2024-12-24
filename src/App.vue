<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    
    <form @submit.prevent="submitForm()">
      <BaseInput label="First Name" name="firstName" :value="form.firstName" @input="saveInput('firstName', $event)" />
      <BaseInput label="Last Name" name="lastName" :value="form.lastName" @input="saveInput('lastName', $event)" />
      <BaseInput label="Email" name="email" :value="form.email" @input="saveInput('email', $event)" />
    </form>

    <pre>{{ this.$store.state.form }}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app',
  methods: {
    submitForm() {
      // console.log('submit')
    },
    saveInput(field, value) {
      this.$store.dispatch('updateForm', {
        field,
        value
      })
    }
  },
  computed: {
    ...mapState(['form'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

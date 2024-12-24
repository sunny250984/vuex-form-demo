<template>
  <div class="input">
    <label :for="name">{{ label }}</label>
    <input
      v-bind="$attrs"
      :class="{
        'error': hasError,
        'green': !!value && !hasError
      }"
      :aria-describedby="`${name}-error`"
      :value="value"
      :name="name"
      :id="name"
      :type="type"
      @input="$emit('input', $event.target.value)"
      @change="$emit('input', $event.target.value)"
    >
    <p :id="`${name}-error`" class="error" v-if="hasError">{{ error }}</p>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    error: {
      type: String,
      required: false
    },
    hasError: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &.error {
    border-color: #721c24;
  }

  &.green {
    border-color: green;
    border-width: 2px;
  }
}
</style>

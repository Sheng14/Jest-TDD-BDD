<template>
  <div class="hello">
      <input data-test='input' v-model="inputValue" @keyup.enter="addToDoItem">
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    addToDoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>

<style scoped lang="stylus">
</style>

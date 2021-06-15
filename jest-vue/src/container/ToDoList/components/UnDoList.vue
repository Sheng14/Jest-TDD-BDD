<template>
  <div class="header">
    <div data-test="count">{{list.length}}</div>
    <ul>
        <li v-for="(item, index) in list" :key="index" data-test="item">
            {{item}}
            <span data-test="delete-button" @click="handleDelete(index)">-</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UnDoList',
  props: ['list'],
  methods: {
    handleDelete (index) {
      console.log(index)
      this.$emit('delete', index)
    }
  }
}
</script>

<style scoped lang="stylus">
</style>

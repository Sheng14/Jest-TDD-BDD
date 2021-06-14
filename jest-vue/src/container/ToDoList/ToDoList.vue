<template>
  <div class="hello">
      <Header @add='addUnDoItem'/>
  </div>
</template>

<script>
import Header from './components/header'

export default {
  name: 'ToDoList',
  components: {
    Header
  },
  data () {
    return {
      unDoList: []
    }
  },
  methods: {
    addUnDoItem (inputValue) {
      this.unDoList.push(inputValue)
      console.log(this.unDoList)
    }
  }
}
</script>

<style scoped lang="stylus">
</style>

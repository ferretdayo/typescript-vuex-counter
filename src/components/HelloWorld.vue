<template>
  <div class="hello">
    <h1>カウンター</h1>
    <Counter/>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import Counter from '@/components/Counter.vue'

@Component({
  name: 'helloWorld',
  components: { Counter }
})
export default class HelloWorld extends Vue {
}
</script>

<style scoped>

</style>

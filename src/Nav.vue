<template>
  <nav>
    <h1>This is a nav component</h1>
    <slot></slot>
  </nav>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class extends Vue {
  constructor() {
    super();
    console.log("Nav initialized");
  }
}
</script>
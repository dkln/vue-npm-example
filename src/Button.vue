<template>
  <button>{{ label }}</button>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class extends Vue {
  @Prop() label!: string;
}
</script>
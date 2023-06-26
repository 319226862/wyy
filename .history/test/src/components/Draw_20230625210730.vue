<template>
    <button class="color-transition" @click="toggleColor" :style="{ backgroundColor: currentColor }">
      Click Me
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentColor: 'red',
      };
    },
    methods: {
      toggleColor() {
        this.currentColor = this.currentColor === 'red' ? 'blue' : 'red';
      },
    },
  };
  </script>
  
  <style>
  .color-transition {
    transition: background-color 0.5s ease;
  }
  </style>
  
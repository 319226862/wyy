<template>
    <button class="color-transition" @click="toggleColor">
      Click Me
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentColor: 'red',
        backgroundPosition: '0% 0%',
      };
    },
    methods: {
      toggleColor() {
        this.currentColor = this.currentColor === 'red' ? 'blue' : 'red';
        this.backgroundPosition = this.currentColor === 'red' ? '0% 0%' : '100% 0%';
      },
    },
  };
  </script>
  
  <style>
  .color-transition {
    transition: background-position 0.5s ease;
    background: linear-gradient(to right, red, blue);
    background-size: 200% 100%;
    background-position: 0% 0%;
  }
  </style>
  
<template>
  <a class="sidebar--navigation--container" @click="toggle">
    <div class="group-height">
      <div class="sidebar--navigation--container--icons">
        <b-icon-columns-gap class="h4 mr-3"></b-icon-columns-gap>
      </div>
      <span class="h6 sidebar--navigation--container--links">
        {{ name }}
      </span>
    </div>
    <div class="dropdown" v-bind:class="{ hide: show }">
      <slot></slot>
    </div>
  </a>
</template>
<style lang="scss" scoped>
  .group-height {
    height: 45px;
  }
  .sidebar--navigation--container {
    height: max-content;
    .dropdown {
      padding: 0 5px;
      padding-left: 21px;
      list-style-type: disc;
      display: none;
    }
    .dropdown:hover {
      font-weight: 500;
    }
    .hide {
      display: block;
    }
  }
</style>
<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  props: ["name"],
  methods: {
    toggle(){
      if (this.show == true) {
        this.show = false
      } else {
        this.show = true
      }
    }
  }
}
</script>

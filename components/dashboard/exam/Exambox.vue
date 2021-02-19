<template>
  <div class="row m-2 selected">
    <div class="col-md-2">
      <img src="https://nothingworks.netlify.app/assets/img/logo.png" class="rounded mx-auto" width="50" height="50" alt="logo for exam">
    </div>
    <div class="col-md-10 p-2">
      <span class="mainame"> CBAP Testr </span> <br>
      <span class="descp">Lorem ipsum dolor sit amet consectetur adipisicing elit. At quasi accusamus? </span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .mainame {
    font-size: 16px;
    line-height: 19px;
    overflow-x: hidden;
    color: #000000;
  }
  .descp {
    font-size: 14px;
    line-height: 16px;
    color: rgba(34, 33, 91, 0.6);
  }
  .selected {
    border: 1px solid #AAB750;
    box-sizing: border-box;
    background: #FCFFEA;
    border-radius: 5px;
  }
</style>

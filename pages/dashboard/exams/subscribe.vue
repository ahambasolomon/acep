<template>
  <div class="dashboard">
    <sidebar></sidebar>
    <div class="mainscreen">
      <navbar></navbar>
      <div class="maincontent">
        <div class="container">
          <div class="row">
            <div class="col-md-6 offset-md-3">

              <div class="my-3 row">
                <div class="col-md-12">
                  <h5 class="subscribe float-left">Subscribe exam</h5>
                  <h5 class="cancel float-right">cancel</h5>
                </div>
              </div>

              <div class="my-3 row">
                <form class="input-group">
                  <div class="input-group-text">
                    <b-icon-search  class=""> </b-icon-search>
                  </div>
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                </form>
              </div>

              <div class="my-3 row">
                <div class="list-content p-2">
                  <exambox></exambox>
                  <exambox></exambox>
                  <exambox></exambox>
                  <exambox></exambox>
                  <exambox></exambox>
                  <exambox></exambox>
                  <exambox></exambox>
                  <exambox></exambox>
                  <exambox></exambox>
                  <exambox></exambox>
                  <exambox></exambox>
                  <exambox></exambox>
                  <exambox></exambox>
                  <exambox></exambox>
                </div>
              </div>

              <div class="row my-3">
                <div class="col-md-2">
                  <b-icon icon="arrow-left-square nav"></b-icon>
                </div>
                <div class="offset-md-8 col-md-2">
                  <b-icon icon="arrow-right-square nav"></b-icon>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .cancel {
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #EB5757;
  }
  .subscribe {
    font-size: 20px;
    line-height: 23px;
    color: #3F2668;
  }
  .nav {
    text-align: center;
    font-size: 33px;
    font-weight: 700;
  }
  .list-content {
    height: 500px;
    overflow-y: scroll;
    background: #FFFFFF;
  }

  .list-content::-webkit-scrollbar {
    width: 5px;
    height: 5px;         /* width of the entire scrollbar */
  }
  .list-content::-webkit-scrollbar-track {
    background: white;        /* color of the tracking area */
  }
  .list-content::-webkit-scrollbar-thumb {
    background-color: #F1F3F6;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid #3F2668;  /* creates padding around scroll thumb */
  }
</style>

<script>
import Exambox from '~/components/dashboard/exam/Exambox'
export default {
  components: {
    Exambox
  }
}
</script>

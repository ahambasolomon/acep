<template>
  <div class="dashboard">
    <sidebar></sidebar>
    <div class="mainscreen">
      <navbar></navbar>
      <div class="maincontent">

        <div class="container my-2">
          <div class="row">
            <div class="px-1 col-md-3 pt-2">
              <span class="page_label" style="padding-left: 15px;"> Exams </span>
            </div>
            <div class="col-md-6">
              <div class="float-right">
                <form class="d-flex input-group">
                  <!-- <span class="input-group-text" id="basic-addon1">@</span> -->
                  <div class="input-group-text">
                    <b-icon-search  class=""> </b-icon-search>
                  </div>

                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
                </form>
              </div>
            </div>
            <div class="col-md-3">
              <b-button type="submit" block variant="primary">Add new exam</b-button>
            </div>
          </div>
        </div>

        <div class="container my-4">
          <div class="row">

            <examblock class="mb-3"></examblock>
            <examblock class="mb-3"></examblock>
            <examblock class="mb-3"></examblock>
            <examblock class="mb-3"></examblock>
            <examblock class="mb-3"></examblock>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import SideBar from '~/components/dashboard/Sidebar.vue';
  import NavBar from '~/components/dashboard/Navbar.vue';
  import PausedTest from '~/components/dashboard/Pausedtest.vue';
  import Examblock from '~/components/dashboard/exam/Examblock.vue'
  import Recentlycompleted from '~/components/dashboard/Recentlycompleted.vue';
  export default {
    middleware: 'auth',
    methods: {

    },
    components: {
      SideBar,
      NavBar,
      PausedTest,
      Recentlycompleted,
      Examblock
    }
  }
</script>

<style lang="scss" scoped>

</style>

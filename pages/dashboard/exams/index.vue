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
            <div class="col-md-4">
              <div class="exam">
                <div class="exam--img mb-3"></div>
                <div class="exam--label ">
                  <span class="float-left name"> AWS Cetification </span>
                  <b-badge class="float-right" variant="primary">10 tests </b-badge>
                </div>
                <div class="exam--description mb-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam saepe, animi! Dolorem, minus.
                </div>
                <div class="exam--card">
                  <div class="content">
                    End date 19 feb 2022
                  </div>
                </div>
                <div class="exam--tailcard">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="smallbox">
                        <span class="text-center smalltext">
                          total question
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  import Recentlycompleted from '~/components/dashboard/Recentlycompleted.vue';
  export default {
    middleware: 'auth',
    methods: {

    },
    components: {
      SideBar,
      NavBar,
      PausedTest,
      Recentlycompleted
    }
  }
</script>

<style lang="scss" scoped>

</style>

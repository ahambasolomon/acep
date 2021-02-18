<template>
  <div class="dashboard">
    <sidebar></sidebar>
    <div class="mainscreen">
      <navbar></navbar>
      <div class="maincontent">

        <div class="container my-2">
          <div class="row">
            <div class="px-1 col-md-4 pt-2">
              <span class="page_label" style="padding-left: 15px;"> Subscribed exams </span>
            </div>
            <div class="col-md-4  offset-md-4">
              <div class="row">
                <div class="col-md-6 pt-2">
                  <span class="page_label"> View All </span>
                </div>
                <div class="col-md-6">
                  <b-button type="submit" block variant="primary">Start an exam</b-button>
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

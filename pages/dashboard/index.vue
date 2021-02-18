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

        <div class="container mt-5">
          <div class="row">
            <div class="col-md-4">
              <div class="cardbox">
                <div class="cardbox--img" style="backgroundImage: url(/assets/AWS_careers.jpg)">
                </div>
                <div class="cardbox--content px-3">
                  <div class="mb-2 pt-2" style="height: 17px;">
                    <span class="page_label_cardbox float-left"> CBAP </span>
                    <div class="float-right">
                      <b-badge variant="primary">10 Test</b-badge>
                    </div>
                  </div>
                  <div class="my-4">
                    <div class="cardbox--content--textcontent">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                       architecto, placeat commodi? Voluptate,
                    </div>
                  </div>
                  <diV class="cardbox--content--final mb-3 px-3">
                    Lorem ipsum dolor sit amet,
                  </diV>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="cardbox">
                <div class="cardbox--img" style="backgroundImage: url(/assets/AWS_careers.jpg)">
                </div>
                <div class="cardbox--content px-3">
                  <div class="mb-2 pt-2" style="height: 17px;">
                    <span class="page_label_cardbox float-left"> CBAP </span>
                    <div class="float-right">
                      <b-badge variant="primary">10 Test</b-badge>
                    </div>
                  </div>
                  <div class="my-4">
                    <div class="cardbox--content--textcontent">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                       architecto, placeat commodi? Voluptate,
                    </div>
                  </div>
                  <diV class="cardbox--content--final mb-3 px-3">
                    Lorem ipsum dolor sit amet,
                  </diV>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="cardbox">
                <div class="cardbox--img" style="backgroundImage: url(/assets/AWS_careers.jpg)">
                </div>
                <div class="cardbox--content px-3">
                  <div class="mb-2 pt-2" style="height: 17px;">
                    <span class="page_label_cardbox float-left"> CBAP </span>
                    <div class="float-right">
                      <b-badge variant="primary">10 Test</b-badge>
                    </div>
                  </div>
                  <div class="my-4">
                    <div class="cardbox--content--textcontent">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                       architecto, placeat commodi? Voluptate,
                    </div>
                  </div>
                  <diV class="cardbox--content--success mb-3 px-2">
                    Lorem ipsum dolor sit amet,
                  </diV>
                </div>
              </div>
            </div>


          </div>
        </div>
        <div class="container my-5">
          <div class="row">
            <div class="col-md-7">
              <pausedtest></pausedtest>
            </div>

            <div class="col-md-5">
              <recentlycompleted></recentlycompleted>
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

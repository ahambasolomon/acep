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

        <div class="container">
          <div class="row">
            <div class="col-sm">
              One of three columns <br>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quia quidem tempore reprehenderit facilis nobis nemo omnis itaque voluptatum, blanditiis voluptatem dignissimos ipsum non et architecto, placeat commodi? Voluptate, quis.
            </div>
            <div class="col-sm">
              One of three columns <br>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quia quidem tempore reprehenderit facilis nobis nemo omnis itaque voluptatum, blanditiis voluptatem dignissimos ipsum non et architecto, placeat commodi? Voluptate, quis.
            </div>
            <div class="col-sm">
              One of three columns <br>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quia quidem tempore reprehenderit facilis nobis nemo omnis itaque voluptatum, blanditiis voluptatem dignissimos ipsum non et architecto, placeat commodi? Voluptate, quis.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import SideBar from '~/components/dashboard/Sidebar.vue'
  import NavBar from '~/components/dashboard/Navbar.vue'
  export default {
    middleware: 'auth',
    methods: {
      logout() {
        swal({
          title: "Confirm",
          text: "Are you sure you want to Log out ?",
          icon: "warning",
          button: "Aww yiss!",
        }).then((res) => {
          if (res == true) {
            this.$auth.logout()
          }
        });
      },
    },
    components: {
      SideBar, NavBar
    }
  }
</script>

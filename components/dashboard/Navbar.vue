<template>
  <div>
    <div class="sidebar">
      <div class="sidebar--logo">
        <img src="@/static/assets/logo.png" class="mt-2 text-center mb-3" width="150" height="50" alt="">
      </div>
      <div class="sidebar--navigation">
        <a class="sidebar--navigation--container">
          <div class="sidebar--navigation--container--icons">
            <b-icon-columns class="h4 mr-3"></b-icon-columns>
          </div>
          <span class="h6 sidebar--navigation--container--links">
            DASHBAORD
          </span>
        </a>

        <a class="sidebar--navigation--container">
          <div class="sidebar--navigation--container--icons">
            <b-icon-columns-gap class="h4 mr-3"></b-icon-columns-gap>
          </div>
          <span class="h6 sidebar--navigation--container--links">
            EXAM
          </span>
        </a>

        <a class="sidebar--navigation--container">
          <div class="sidebar--navigation--container--icons">
            <b-icon-person-fill class="h4 mr-3"></b-icon-person-fill>
          </div>
          <span class="h6 sidebar--navigation--container--links">
            PROFILE
          </span>
        </a>

      </div>
    </div>

    <div class="appnnav">
      <div class="app-nav">
        <b-navbar>
          <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

          <div class="mr-5 ml-auto">
            <div>
              <!-- <span class="notifcation-icon">
                <b-icon-bell-fill class="h4 mt-3 mr-3"></b-icon-bell-fill>
              </span> -->

              <b-navbar-brand href="#">
                <b-img src="https://placekitten.com/g/30/30" rounded alt="Kitten"></b-img>
              </b-navbar-brand>
              <b-navbar-brand>  {{ this.$auth.user.firstname }} {{ this.$auth.user.lastname }} </b-navbar-brand>
              <!-- <b-nav-text>Navbar text</b-nav-text> -->
              <div class="nav-drop">
                <b-dropdown size="sm" variant="link" toggle-class="text-decoration-none" no-caret>
                  <template #button-content>
                    <b-icon-chevron-down></b-icon-chevron-down> <span class="sr-only">Search</span>
                  </template>
                  <b-dropdown-item href="#">Profile </b-dropdown-item>
                  <b-dropdown-item @click="logout()">Log Out</b-dropdown-item>
                </b-dropdown>
              </div>

            </div>
          </div>

          <!-- <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-text>Navbar text</b-nav-text>
            </b-navbar-nav>
          </b-collapse> -->
        </b-navbar>
      </div>
    </div>
  </div>
</template>
<script>
  import swal from 'sweetalert';
export default {
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
}
</script>

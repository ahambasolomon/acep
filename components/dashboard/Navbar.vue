<template>
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
            <b-navbar-brand>  {{ capitalize(this.$auth.user.firstname) }} {{ capitalize(this.$auth.user.lastname) }} </b-navbar-brand>
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
</template>
<script>
import swal from 'sweetalert';
export default {
   methods: {
    capitalize(s) {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    },
    logout() {
      swal({
        title: "Confirm",
        text: "Are you sure you want to Log out ?",
        icon: "warning",
        button: "Continue",
      }).then((res) => {
        if (res == true) {
          this.$auth.logout()
        }
      });
    },
  },
}
</script>

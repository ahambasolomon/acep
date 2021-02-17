<template>
  <div class="dashboard">
    <navbar></navbar>
    <div class="mainscreen">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, fugiat. Vero eos libero laudantium odio! Harum ipsam laudantium iusto ducimus dolorum quo, quae accusamus tempore atque alias, nihil libero voluptatem.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sed, tempora laboriosam harum obcaecati velit. Molestias porro non temporibus dicta vitae blanditiis exercitationem harum in eum amet, doloremque odio obcaecati!
    </div>
  </div>
</template>
<script>

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
      NavBar,
    }
  }
</script>

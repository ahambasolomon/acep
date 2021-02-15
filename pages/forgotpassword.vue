<template>
  <div>

    <div class="container">
      <div class="authspace">
        <img src="@/static/assets/logo.png" class="mt-5 mb-3" width="150" height="50" alt="">
        <b-card>
          <p class="ml- authtext" style="padding-left: 15px">Reset Password</p>
          <b-form>
            <b-container fluid>

              <div class="row auth">
                <div class="col-md-12">
                  <b-form-group id="email" label="Email" label-for="email">
                    <b-form-input id="email" type="text" placeholder="Email" required ></b-form-input>
                  </b-form-group>
                </div>
              </div>

              <b-button href="#" block style="font-weight: bold;" variant="primary">Sign In</b-button>
            </b-container>
          </b-form>
        </b-card>
         <p class="mt-2 authstory"> Don't have an account? <strong>  <b-link to="/"> Sign Up. </b-link> </strong> </p>
      </div>
    </div>
  </div>

</template>

<script>
export default {}
</script>

<style>

.container {
  margin: 0 auto;
  min-height: 80px;
  display: flex;
  width: 500px;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.card-body {
  padding: 30px;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<template>
  <div>

    <div class="container">
      <div>
        <img src="@/static/assets/logo.png" class="mt-5 mb-3" width="150" height="50" alt="">
        <b-card>
          <h4 class="ml- authtext" style="padding-left: 15px">Register</h4>
          <b-form>
            <b-container fluid>
              <div class="row auth">
                <div class="col-md-6">
                  <b-form-group id="firstname" label="Firstname" label-for="firstname">
                    <b-form-input id="firstname" type="text" placeholder="Firstname" required ></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group id="lastname" label="Lastname" label-for="lastname">
                    <b-form-input id="lastname" type="text" placeholder="Lastname" required ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div class="row auth">
                <div class="col-md-12">
                  <b-form-group id="email" label="Email" label-for="email">
                    <b-form-input id="email" type="text" placeholder="Email" required ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div class="row auth">
                <div class="col-md-12">
                  <b-form-group id="password" label="Password" label-for="Password">
                    <b-form-input id="password" type="password" placeholder="Password" required ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div class="row auth">
                <div class="col-md-12">
                  <b-form-group id="password" label="Password Confirmation" label-for="password-confirmation">
                    <b-form-input id="password-confirmation" type="password" placeholder="Password confirmation" required ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <b-button href="#" block variant="primary">Register</b-button>
            </b-container>
          </b-form>
        </b-card>
        <p class="mt-5 authstory"> Already have an have an account? <strong> Signin </strong> </p>
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

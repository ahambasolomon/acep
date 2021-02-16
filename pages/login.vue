<template>
  <div>

    <div class="container">
      <div class="authspace">
        <img src="@/static/assets/logo.png" class="mt-5 mb-3" width="150" height="50" alt="">
        <b-card>
          <h4 class="ml- authtext" style="padding-left: 15px">Sign in</h4>
          <p class="simpletext errorcolor" v-if="this.error"> {{ this.error.message }} </p>
          <b-form @submit.stop.prevent="onSubmit" ref="formContainer">
            <b-container fluid>

              <div class="row auth">
                <div class="col-md-12">
                  <b-form-group id="email" label="Email" label-for="email">
                    <b-form-input id="email" type="text" :state="validateState('email')" v-model="$v.formdata.email.$model" placeholder="Email" ></b-form-input>
                      <b-form-invalid-feedback id="input-1-live-feedback">This is a required field and must be email.</b-form-invalid-feedback>
                  </b-form-group>
                </div>
              </div>
              <p class="simpletext errorcolor" v-if="this.error != null">
                  <ul style="list-style-type:none;" v-if="this.error.errors.message">
                      <li class="errormessage" v-for="(error, index) in this.error.errors.message" :key="index"> {{ error }} </li>
                  </ul>
              </p>
              <div class="row auth">
                <div class="col-md-12">
                  <b-form-group id="password" label="Password" label-for="Password">
                    <b-form-input id="password" v-model="$v.formdata.password.$model" :state="validateState('password')" type="password" placeholder="Password" >
                      <template #append>
                        <b-input-group-text><strong class="text-danger">!</strong></b-input-group-text>
                      </template>
                    </b-form-input>
                    <b-form-invalid-feedback id="input-1-live-feedback">This is a required field and must be more than 8 characters. </b-form-invalid-feedback>
                  </b-form-group>
                  <p class="mt-2 trai float-right"><span> <b-link to="forgotpassword"> Forgot Password? </b-link> </span> </p>
                </div>
              </div>
              <b-button type="submit" block :disabled="disabled" variant="primary">Register</b-button>
            </b-container>
          </b-form>
        </b-card>
         <p class="mt-2 authstory"> Don't have an account? <strong>  <b-link to="/forgotpassword"> Sign Up. </b-link> </strong> </p>
      </div>
    </div>
  </div>

</template>

<script>
  import { validationMixin } from "vuelidate";
  import { required, email, minLength, sameAs} from "vuelidate/lib/validators";
  export default {
      mixins: [validationMixin],
      layout: 'auth',
      loading: {
          color: 'blue',
          height: '5px'
      },
      loadingIndicator: {
          name: 'circle',
          color: '#512DA8',
          background: 'white'
      },
      middleware ({ store, redirect }) {
          if (store.state.auth.loggedIn) {
              return redirect('/dashboard');
          }
      },
      data() {
          return {
              error: null,
              formdata: {
                  email: "",
                  password: "",
              },
              disabled: false,
              fullPage: false
          }
      },
      validations: {
          formdata: {
              email: { required, email, minLength: minLength(4)},
              password: { required, minLength: minLength(8)},
          }
      },
      methods: {
        async onSubmit(){
          this.$v.formdata.$touch();
            // this.disabled = true;
            if (this.$v.formdata.$anyError) {
              return;
            }
            try {
              this.disabled = true
              this.error = null
              this.$nuxt.$loading.start()
              await this.$auth.loginWith('local', {
                data: {
                   email: this.formdata.email,
                  password: this.formdata.password
                },
              })
              this.$toast.open({
                message: 'Successful',
                position:  'top-right',
                type: 'success',
                  // all of other options may go here
              });
              this.$router.push('/dashboard')
              this.$nuxt.$loading.finish();
            } catch (e) {
              this.disabled = false
              this.$toast.open({
                  message: 'An error occoured.',
                  position:  'top-right',
                  type: 'error',
                  // all of other options may go here
              });
              this.error = e.response.data
              this.$nuxt.$loading.finish();
            }
            // loader.hide()

            // setTimeout(() => {
            //     this.$nuxt.$loading.finish();
            // }, 500)
            // setTimeout(() => {
            //     loader.hide()
            // },5000)
            // alert("Form submitted!");
        },
        onCancel(){
            // this.$loading.hide();
          console.log("canceled");
        },
        validateState(name) {
          const { $dirty, $error } = this.$v.formdata[name];
          return $dirty ? !$error : null;
        },
      }
  }
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

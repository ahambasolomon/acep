<template>
  <div>

    <div class="container">
      <div class="row">
        <div class="authspace col-md-4 offset-md-4">
          <div class="text-center">
            <img src="@/static/assets/logo.png" class="mt-5 mb-3" width="150" height="50" alt="">
          </div>

          <b-card>
            <h4 class="ml- authtext" style="padding-left: 15px">Register</h4>

            <p class="invalid-feedback" v-if="this.error"> {{ this.error.message }} </p>
            <b-form @submit.stop.prevent="onSubmit" ref="formContainer">
              <b-container fluid>
                <div class="row auth">
                  <div class="col-md-6">
                    <b-form-group id="firstname" label="First name" label-for="firstname">
                      <b-form-input id="firstname" type="text" v-model="$v.formdata.firstname.$model"
                              :state="validateState('firstname')" placeholder="Firstname" required ></b-form-input>
                      <b-form-invalid-feedback id="input-1-live-feedback">This is a required field and must be at least 4 characters.</b-form-invalid-feedback>
                      <p class="simpletext errorcolor" v-if="this.error">
                          <ul style="list-style-type:none;" v-if="this.error.errors.firstname">
                              <li class="errormessage"  v-for="(error, index) in this.error.errors.firstname" :key="index"> {{ error }} </li>
                          </ul>
                      </p>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group id="lastname" label="Last name" label-for="lastname">
                      <b-form-input id="lastname" type="text" v-model="$v.formdata.lastname.$model"
                              :state="validateState('lastname')" placeholder="Lastname" required ></b-form-input>
                      <b-form-invalid-feedback id="input-1-live-feedback">This is a required field and must be at least 4 characters.</b-form-invalid-feedback>
                      <p class="simpletext errorcolor" v-if="this.error != null">
                          <ul style="list-style-type:none;" v-if="this.error.errors.lastname">
                              <li class="errormessage" v-for="(error, index) in this.error.errors.lastname" :key="index"> {{ error }} </li>
                          </ul>
                      </p>
                    </b-form-group>
                  </div>
                </div>
                <div class="row auth">
                  <div class="col-md-12">
                    <b-form-group id="email" label="Email" label-for="email">
                      <b-form-input id="email" v-model="$v.formdata.email.$model" :state="validateState('email')" type="text" placeholder="Email" required ></b-form-input>
                      <p class="simpletext errorcolor" v-if="this.error != null">
                          <ul style="list-style-type:none;" v-if="this.error.errors.email">
                              <li class="errormessage" v-for="(error, index) in this.error.errors.email" :key="index"> {{ error }} </li>
                          </ul>
                      </p>
                      <b-form-invalid-feedback id="input-1-live-feedback">This is a required field and must be email.</b-form-invalid-feedback>
                    </b-form-group>
                  </div>
                </div>
                <div class="row auth">
                  <div class="col-md-12">
                    <b-form-group id="password" label="Password" label-for="Password">
                      <b-form-input id="password" type="password" v-model="$v.formdata.password.$model"
                              :state="validateState('password')" placeholder="Password" required >
                        <template #append>
                          <b-input-group-text><strong class="text-danger">!</strong></b-input-group-text>
                        </template>
                      </b-form-input>
                      <p class="simpletext errorcolor" v-if="this.error != null">
                          <ul style="list-style-type:none;" v-if="this.error.errors.password">
                              <li class="errormessage" v-for="(error, index) in this.error.errors.password" :key="index"> {{ error }} </li>
                          </ul>
                      </p>
                      <b-form-invalid-feedback id="input-1-live-feedback">This is a required field and must be at least 8 characters. </b-form-invalid-feedback>
                    </b-form-group>
                  </div>
                </div>
                <div class="row auth">
                  <div class="col-md-12">
                    <b-form-group id="password" label="Password Confirmation" label-for="password-confirmation">
                      <b-form-input id="password-confirmation" type="password" v-model="$v.formdata.password_confirmation.$model" :state="validateState('password_confirmation')" placeholder="Password confirmation" required ></b-form-input>
                      <p class="simpletext errorcolor" v-if="this.error != null">
                          <ul style="list-style-type:none;" v-if="this.error.errors.password_confirmation">
                              <li class="errormessage" v-for="(error, index) in this.error.errors.password_confirmation" :key="index"> {{ error }} </li>
                          </ul>
                      </p>
                      <b-form-invalid-feedback id="input-1-live-feedback">This is a required field and must be at least 8 characters.</b-form-invalid-feedback>
                    </b-form-group>
                  </div>
                </div>
                <b-button type="submit" block :disabled="disabled" variant="primary">Register</b-button>
              </b-container>
            </b-form>
          </b-card>
          <p class="mt-2 authstory" style="color: #3F2668;"> Already have an have an account? <strong>  <b-link to="/"> Sign In. </b-link> </strong> </p>
        </div>
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
              firstname: "",
              lastname: "",
              email: "",
              password: "",
              password_confirmation: ""
          },
          disabled: false,
          fullPage: false
      }
    },
    validations: {
      formdata: {
          email: { required, email, minLength: minLength(4)},
          firstname: { required, minLength: minLength(4)},
          lastname: { required, minLength: minLength(4)},
          password: { required, minLength: minLength(8)},
          password_confirmation: { required, minLength: minLength(4),  sameAsPassword: sameAs('password')},
      }
    },
    methods: {
      async onSubmit(){
        this.$v.formdata.$touch();
        this.disabled = true;
        if (this.$v.formdata.$anyError) {
          return;
        }
        this.$axios.post(`${process.env.baseUrl}register`, this.formdata).then((res) => {
          this.$nuxt.$loading.finish();
          this.$toast.open({
              message: 'Registration successful',
              position:  'top-right',
              type: 'success',
              // all of other options may go here
          });
          this.$router.push('/login');
        }).catch((err) => {
          this.error = err.response.data
          console.log(err.response.data)
          this.$toast.open({
              message: 'Something went wrong!',
              position:  'top-right',
              type: 'error',
              // all of other options may go here
          });
          this.$nuxt.$loading.finish();
          this.disabled = false;
        });
      },
      onCancel(){
          // this.$loading.hide();
          console.log("canceled");
      },
      validateState(name) {
          const { $dirty, $error } = this.$v.formdata[name];
          return $dirty ? !$error : null;
      },
    },
    mounted(){

    }

}
</script>

<style>


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

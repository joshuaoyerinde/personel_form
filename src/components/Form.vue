<template>
  <div class="hello">
   <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
    <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="index.html"><img src=""  class="img-fluid rounded-circle" width="100px" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav ms-auto py-4 py-lg-0">
                <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="about.html"></a></li>
                <li class="nav-item"><router-link class="nav-link py-3 py-lg-4" to="/login" >Form</router-link></li>

            </ul>
        </div>
    </div>
 </nav>
 <!--  -->
  
  <MDBContainer>
       <div class="row justify-content-center mx-auto" style="margin-top:150px">
          <div class="col-md-10">
            <MDBCard>
              <MDBCardBody>
                <!-- <MDBCardTitle class="p-4 mt-3 text-center"></MDBCardTitle> -->
                <MDBCardText>
                  <div class="text-center">
                      <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 45px; height: 45px"
                      class="rounded-circle" /> <br>
                      <div class="text-head" >
                        Staff Employment form 
                      </div>
                  </div>
                  <!-- <form > -->
                    <div class="row justify-content-center p-4">
                      <div class="col-md-6 mb-3">
                          <MDBInput label="Firstname" size="lg" v-model="firstname" />
                      </div>
                      <div class="col-md-6 mb-4">
                          <MDBInput label="Lastname " size="lg" v-model="lastname"/>
                      </div>
                      <div class="col-md-12 mb-3">
                          <MDBInput label="Email" size="lg"  v-model="email"/>
                      </div>
                      <div class="col-md-6 mb-3">
                          <MDBInput label="Phone" size="lg" v-model="phone" />
                      </div>
                      <div class="col-md-6 mb-3">
                          <MDBInput label="LGA" size="lg" v-model="local" />
                      </div>
                      <div class="col-md-6 mb-3">
                          <MDBInput label="Country" size="lg" v-model="country" />
                      </div>
                      <div class="col-md-6 mb-3">
                          <MDBInput label="State" size="lg" v-model="state"/>
                      </div>
                      <div class="col-md-6 mb-3">
                          <MDBInput label="Role" size="lg" v-model="role" />
                      </div>
                      <div class="col-md-6 mb-4">
                          <MDBInput label="Location " size="lg"  v-model="location" />
                      </div>
                      <div class="col-md-6 mb-3">
                          <MDBInput label="dateOfBirth" size="lg" type="date" v-model="date"/>
                      </div>
                      <div class="col-md-6 mb-4">
                          <MDBInput label="Position " size="lg"  v-model="position" />
                      </div>
                      <div class="col-md-12">
                        <MDBBtn @click="onSubmitform" type="submit" color="primary"> <span v-show="title">Submit Form</span> 
                          <div class="text-center" v-show="spinner">
                            <MDBSpinner />
                          </div>
                        </MDBBtn>
                      </div>
                    </div>

                  <!-- </form> -->
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
       </div>
       <!--  -->
      
      
  </MDBContainer>
  </div>
</template>

<script>
import { MDBContainer, MDBInput,MDBCard,MDBBtn,MDBSpinner } from "mdb-vue-ui-kit";
import Axios from 'axios'
import API from './environment'
// import {ref} from 'vue'
export default {
  name: "HelloWorld",
  data(){
    return{
      count:'',
      firstname:'',
      lastname:'',
      email:'',
      phone:'',
      local:'',
      country:'',
      state:'',
      role:'',
      location:'',
      date:'',
      position:'',
      show1 : true,
      show2:false,
      spinner:false,
      title:true
    }
  },
  setup() {
    //  let exampleFrameModal =   this.exampleFrameModal1 = ref(false);
    //   return{
    //       exampleFrameModal
    //   }
  },
  components: {
    MDBContainer,
    MDBInput,
    MDBCard,
    MDBBtn,
    MDBSpinner 
   
  },
  created(){
    this.count = API.http
  },
  methods:{
    onSubmitform:function(){
      this.spinner = true
      this.title = false
       this.show2 = true
        let {
           firstname,
            lastname,
            email,
            phone,
            local,
            country,
            state,
            role,
            location,
            date,
            position
        } = this
        let form_data =  {firstname, lastname, email, phone, local, country, state, role, location, date, position}
        let URL = API.http
        console.log(URL)
        Axios.post(`${URL}auth/register`, form_data).then(res=>{
          console.log(res)
          if(res.status == 200){
            
             setTimeout(() => {
               this.spinner = false
              this.spinner == false ? this.$router.push('/home') : this.spinner == true 
             }, 2000);
                
          }
        }).catch(err=>{
          console.log(err)
        })
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Raleway&family=Roboto:wght@500&display=swap');
#mainNav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1030;
    border-bottom: 1px solid #5a5a5a;
    background-color: rgb(253, 253, 253) !important;
    font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
  #mainNav .navbar-brand {
    font-weight: 800;
  }
  #mainNav .navbar-toggler {
    font-size: 0.75rem;
    font-weight: 800;
    padding: 0.75rem;
    text-transform: uppercase;
  }
  #mainNav .navbar-nav > li.nav-item > a.nav-link {
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.0625em;
    text-transform: uppercase;
  }
  @media (min-width: 992px) {
    #mainNav {
      border-bottom: 1px solid transparent;
      background: transparent;
    }
    #mainNav .navbar-brand {
      color: rgb(53, 53, 53);
    }
    #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {
      color: rgba(34, 34, 34, 0.8);
    }
    #mainNav .navbar-nav > li.nav-item > a.nav-link {
      color: #1266F1;
    }
    #mainNav .navbar-nav > li.nav-item > a.nav-link:focus, #mainNav .navbar-nav > li.nav-item > a.nav-link:hover {
      color: rgba(70, 70, 70, 0.8);
    }
  }
  @media (min-width: 992px) {
    #mainNav {
      transition: background-color 0.2s;
      /* Force Hardware Acceleration in WebKit */
      transform: translate3d(0, 0, 0);
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
    #mainNav.is-fixed {
      /* when the user scrolls down, we hide the header right above the viewport */
      position: fixed;
      top: -83px;
      transition: transform 0.2s;
      border-bottom: 1px solid white;
      background-color: rgba(255, 255, 255, 0.9);
    }
    #mainNav.is-fixed .navbar-brand {
      color: #212529;
    }
    #mainNav.is-fixed .navbar-brand:focus, #mainNav.is-fixed .navbar-brand:hover {
      color: #0085A1;
    }
    #mainNav.is-fixed .navbar-nav > li.nav-item > a {
      color: #212529;
    }
    #mainNav.is-fixed .navbar-nav > li.nav-item > a:focus, #mainNav.is-fixed .navbar-nav > li.nav-item > a:hover {
      color: #0085A1;
    }
    #mainNav.is-visible {
      /* if the user changes the scrolling direction, we show the header */
      transform: translate3d(0, 100%, 0);
    }
  }
  .btn-edit{
    padding: 9px 50px;
    font-family: 'Poppins'
  }
  .btn-white{
    background-color: #fff;
    font-family: 'Poppins';
    border: none;
    padding: 10px 10px;

  }
  .text-head{
    font-family: 'Poppins';
  }
  img{
    width: 60px;
  }
</style>

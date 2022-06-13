<template>
    <div>
            <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
    <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="index.html"><img src="../../assets/img.png"  class="img-fluid rounded-circle" width="50px" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav ms-auto py-4 py-lg-0">
                <li class="nav-item"><router-link class="nav-link px-lg-3 py-3 py-lg-4" to="/dash">Home</router-link></li>
                <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="about.html">Admin</a></li>
                <!-- <li class="nav-item"><button class="nav-link mt-2  btn btn-white">Print Form</button></li> -->

            </ul>
        </div>
    </div>
 </nav>
    <div class="container" style="margin-top:150px">
         <div class="row">
              <div class="card">
                  <div class="card-body">
                      <div class="card-text">
                          <div>
                              <img src="../../assets/img.png" class="rounded-circle img" alt="">
                          </div>
                      </div>
                      <div class="row mt-3">
                        <div class="col-md-12">
                           <div class="row">
                               <div class="col-md-6 mb-2">First Name: <strong> {{getdata.firstname}}</strong></div>
                               <div class="col-md-6 mb-3">Last Name: <strong> {{getdata.lastname}} </strong></div>
                               <div class="col-md-6 mb-2">Email: <strong>  {{getdata.email}}</strong></div>
                               <div class="col-md-6 mb-3">StateOfOrigin: <strong> {{getdata.state}}</strong></div>
                               <div class="col-md-6 mb-3">L.G.A: <strong>{{getdata.local}}</strong> </div>
                               <div class="col-md-6 mb-4">Phone: <strong>  {{getdata.phone}}</strong></div>
                               <div class="col-md-6 mb-4">Status: <strong> {{getdata.status}}</strong></div>
                               <div class="col-md-6 mb-4">Position: <strong>{{getdata.position}} </strong></div>
                               <div class="col-md-6 mb-4">Role: <strong> {{getdata.role}}</strong></div>
                               <div class="col-md-6 mb-4">department: <strong>{{getdata.department}}</strong></div>
                                <div class="col-md-6 mb-4">Country: <strong>{{getdata.country}}</strong></div>
                                <div class="col-md-6 mb-4">Retired: <strong>No</strong></div>
                                <div class="col-md-6 mb-4">Retired: <strong>{{getdata.dateOfBirth}}</strong></div>
                                
                               <div class="col-md-6 mb-3"><strong></strong> <button @click="()=>remove(getdata._id)" class="btn btn-primary btn-edit">Delete Account</button></div>
                           </div>
                        </div>
                    </div>
                  </div>
              </div>
         </div>
    </div>
    </div>
</template>

<script>
import Axios from 'axios'
import API from '../environment'
export default {
    data(){
        return{
            getdata:''
        }
    },
    methods:{
        getId(){
            let id = this.$route.params.id
            console.log(id)
            let base_url = API.http
            Axios.get(`${base_url}/user_profile/${id}`).then(res=>{
                this.getdata = res.data.response
                console.log(this.getdata )
            }).catch(err=>{
                if(err.code == 'ERR_NETWORK'){
                    alert("network error")
                }
            })
        },
        remove(param){
            let base_url = API.http
            Axios.delete(`${base_url}remove_user/${param}`).then(res=>{
                console.log(res.data)
                if(res.data.response == 'deleted'){
                    this.$router.push('/dash')
                }
            })
            console.log(param)
        }  
    },

    created(){
        this.getId()
    }
}
</script>

<style lang="css" scoped>
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
  .img{
      width: 200px;
  }
</style>
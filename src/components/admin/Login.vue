<template>
    <MDBContainer>
        <div class="row justify-content-center" style="margin-top:150px">
            <div class="col-md-7">
                <MDBCard>
                    <MDBCardBody class="p-3">
                        <MDBCardText>
                            <div class="text-center">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 45px; height: 45px"
                                class="rounded-circle" /> <br>
                                <div class="text-head" >
                                   Admin
                                </div>
                            </div>
                            <form @submit.prevent="onLogin">
                                <div class="row p-3 justify-content-center">
                                    <div class="col-md-8 mb-3">
                                        <MDBInput label="Username" size="lg" v-model="username" />
                                    </div>
                                    <div class="col-md-8 mb-3">
                                        <MDBInput label="Password" size="lg" type="password" v-model="password" />
                                    </div>
                                    <div class="col-md-8 mb-3">
                                       <MDBBtn color="primary" type="submit">Login</MDBBtn>
                                    </div>
                                </div>
                            </form>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div>
    </MDBContainer>
</template>

<script>
import { MDBContainer, MDBCard,MDBBtn, MDBInput} from "mdb-vue-ui-kit";
import API from '../environment'
import axios from 'axios';
export default {
    data(){
        return{
            password:'',
            username:''
        }
    },
    components:{
        MDBContainer, 
        MDBInput,
        MDBCard,
        MDBBtn 
    },
    methods:{
        onLogin(){
           let {username, password} = this
          let base_url = API.http
          axios.post(`${base_url}/admin_login`,{username, password}).then(res=>{
              console.log(res)
              if(res.status == 200){
                  this.$router.push('/dash')
              }
          }).catch(err=>{
              console.log(err)
          })
        }
    }
}
</script>

<style lang="css" scoped>
    
</style>
<template>
<nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
    <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="index.html">Admin</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav ms-auto py-4 py-lg-0">
                <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="#">Dash</a></li>
                <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="about.html"></a></li>
                <li class="nav-item"><router-link class="nav-link py-3 py-lg-4" to="/login" >StaffList</router-link></li>

            </ul>
        </div>
    </div>
 </nav>
    <div class="container" style="margin-top:150px">
        <div class="row">
            <div class="col-md-6 mb-3">
                <MDBCard>
                    <MDBCardBody class="p-3">
                        <MDMCardText class="">
                            <div>
                                No of Employee
                                <h5>{{totalOfEmployee}}</h5>
                            </div>
                            <div class="clear-fix">
                                <div class="float-end"><i class="fa fa-user"></i></div>
                            </div>
                        </MDMCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
            <div class="col-md-6 mb-3">
                <MDBCard>
                    <MDBCardBody class="p-3">
                        <MDMCardText class="">
                            <div>
                                No of Onboarding
                                <h5>{{totalOfawaiting }}</h5>
                            </div>
                            <div class="clear-fix">
                                <div class="float-end"><i class="fa fa-user"></i></div>
                            </div>
                        </MDMCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
            <div class="col-md-0 d-none">
                <MDBCard>
                    <MDBCardBody class="p-3">
                        <MDBCardText class="">
                            <div>
                                Active
                                <h5>20</h5>
                            </div>
                            <div class="clear-fix">
                                <div class="float-end"><i class="fa fa-user"></i></div>
                            </div>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div>
        <!--  -->
        <div class="row">
            <div class="col-md-12">
                <div class="clearfix">
                    <div class="float-end">
                        <MDBInput
                        type="text"
                        id="form1"
                        class="form-icon-trailing"
                        label="search"
                        v-model="findname"
                        >
                        <i class="fas fa-search trailing"></i>
                        
                    </MDBInput>
                    </div>
                </div>
            </div>
        </div>
        <MDBTable class="align-middle mb-0 bg-white mt-5">
            <thead class="bg-light">
            <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Status</th>
                <th>Position</th>
                <th>Actions</th>
                <th>Truncate</th>
            </tr>
            </thead>
            <tbody>
         
            <!--  -->
                <tr v-for="(p,i) in filterednames" :key="i">
                    <td>
                    <div class="d-flex align-items-center">
                        <img src="https://mdbootstrap.com/img/new/avatars/7.jpg" class="rounded-circle" alt=""
                        style="width: 45px; height: 45px" />
                        <div class="ms-3">
                        <p class="fw-bold mb-1">{{p.firstname}} {{p.lastname}}</p>
                        <p class="text-muted mb-0">{{p.email}}</p>
                        </div>
                    </div>
                    </td>
                    <td>
                        <p class="fw-normal mb-1">{{p.department}}</p>
                        <p class="text-muted mb-0">{{p.position}}</p>
                    </td>
                    <td>
                        <MDBBadge :badge="p.status=='awaiting'? 'warning' : 'success'" pill class="d-inline">{{p.status}}</MDBBadge>
                    </td>
                    <td>{{p.position}}</td>

                    <td>
                        <MDBBtn color="link" size="sm"  aria-controls="exampleModalScrollableTitle"
                            @click="()=>getInfo(p)" rounded class="fw-bold" :ripple="{ color: 'dark' }">
                            Update
                        </MDBBtn>
                    </td>
                    <td>
                        <MDBBtn color="link" size="sm"  
                            @click="()=>viewStaff(p._id)" rounded class="fw-bold" :ripple="{ color: 'dark' }">
                            View
                        </MDBBtn>
                    </td>
                </tr>
            </tbody>
        </MDBTable>
        <!-- modal -->
        <MDBModal
            id="exampleModalScrollable"
            tabindex="-1"
            labelledby="exampleModalScrollableTitle"
            v-model="exampleModalScrollable"
            scrollable
            size="lg"
        >
            <MDBModalHeader>
            <MDBModalTitle id="exampleModalScrollableTitle"> Admin </MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody > 
               <!-- form update -->
               <div class="text-center" v-show="error_">
                   <h1>network error</h1>
               </div>
                <div class="text-center">
                      <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 45px; height: 45px"
                      class="rounded-circle" /> <br>
                      <div class="text-head" >
                        Staff Employment Deatails
                      </div>
                  </div>
                  <div class="row justify-content-center p-4">
                    <div class="col-md-6 mb-3">
                        <MDBInput label="Firstname" size="lg" v-model="firstname" />
                    </div>
                    <div class="col-md-6 mb-4">
                        <MDBInput label="Lastname " size="lg" v-model="lastname" />
                    </div>
                    <div class="col-md-12 mb-3">
                        <MDBInput label="Email" size="lg" v-model="email"/>
                    </div>
                    <div class="col-md-6 mb-3">
                        <MDBInput label="Phone" size="lg" v-model="phone" />
                    </div>
                    <div class="col-md-6 mb-3">
                        <MDBInput label="LGA" size="lg" v-model="local"/>
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
                    <div class="col-md-6 mb-4">
                        <MDBInput label="Tag Department" size="lg"  v-model="department" />
                    </div>

                    <div class="col-md-6 mb-4">
                        <MDBInput label="DateOfEmployement" size="lg"  type="date" v-model="dateOfEmployement" />
                    </div>
                    <div class="col-md-6 mb-4">
                        <MDBInput label="position" size="lg"  v-model="position" />
                    </div>
                     <div class="col-md-6 mb-4">
                        <MDBInput label="Performance" size="lg"  v-model="performance" />
                    </div> 
                    <!-- <div class="col-md-12 mb-4">
                        <MDBInput label="Performance" size="lg"  v-model="per" />
                    </div>  -->
                  </div>
            </MDBModalBody>
            <MDBModalFooter>
            <MDBBtn color="secondary" @click="exampleModalScrollable = false"> Close </MDBBtn>
            <MDBBtn @click="onUpdate" color="primary"> Save changes </MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    </div>
</template>

<script>
import { 
    MDBCard,MDBTable, 
    MDBBtn,MDBBadge,
    MDBModal, MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBCardText,
    MDBCardBody,
    MDBInput 
    } from "mdb-vue-ui-kit";

// import { ref } from 'vue'
import API from '../environment'
import  Axios  from 'axios';
import axios from 'axios';

export default {
    data(){
        return{
            firstname:'',
            lastname:'',
            email:'',
            phone:'',
            local:'',
            country:'',
            state:'',
            role:'',
            location:'',
            department:'',
            dateOfEmployement:'',
            position:'',
            performance:'',
            personnels:'',// for accepting all personnels info
            exampleModalScrollable: false,
            id:'',
            totalOfEmployee:"",
            totalOfawaiting:'',
            findname:'',
            error_:false
        }
    },
    components:{
        MDBInput,
        MDBCard,
        MDBTable,
        MDBBtn,
        MDBBadge,
        MDBModal,
        MDBModalHeader,
        MDBModalTitle,
        MDBModalBody,
        MDBModalFooter,
        MDBCardText,
        MDBCardBody 
    },
    computed:{
         filterednames(){
            let filter = new RegExp (this.findname, 'i');
            if(this.personnels){
                return this.personnels.filter(f => f.firstname.match(filter) || f.department.match(filter) || f.role.match(filter));
            }else{
                return null;
            }
        }
    },
    methods:{
        //to update the personels details
        onUpdate(){
            let {
            id,
            firstname,
            lastname,
            email,
            phone,
            local,
            country,
            state,
            role,
            location,
            position,
            department,
            DateOfEmployement,
            Performance
            } = this;
            let form_update = { id, firstname, lastname, email, phone, local, country, state, role, location, position, department,DateOfEmployement, Performance}
            console.log(form_update )
            let URL = API.http
            Axios.patch(`${URL}admin/update`, form_update).then(res=> {
                console.log(res)
                if(res.status == 200){
                    alert(res.data.message)
                }
            }).catch(err=>{
                console.log(err)
            })
        },
        //to get all the personnels details
        getDetails(){
            const BASE_URL = API.http
            Axios.get(`${BASE_URL}info`).then(res=>{
                this.personnels = res.data.response
                this.totalOfEmployee = this.personnels.length
                // console.log(this.personnels)
            }).catch(err =>{
                console.log(err.code)
                if(err.code == 'ERR_NETWORK'){
                    this.error_ = true
                }
            })
        },

        //get all  the user information into the input inside modal box
        getInfo(param){
            this.id = param._id
            this.firstname = param.firstname,
            this.lastname = param.lastname
            this.email = param.email
            this.phone = param.phone
            this.local = param.local
            this.country = param.country
            this.state = param.state
            this.role= param.role
            this.location= param.location
            this.position=  param.position
            this.department= param.department
            this.DateOfEmployement= param.dateOfStart
            this.Performance= param.performance
           this.exampleModalScrollable = true

        },
        //to view personnels info
        viewStaff(id){
            this.$router.push('/admin/user_profile/' + id);
        }
    },
    mounted(){
        this.getDetails();
        let base_url = API.http
        axios.get(`${base_url}total_status`).then(res=>{
            this.totalOfawaiting = res.data.response.length
        })
    }
}
</script>
<style lang="css" scoped src="./admin.css">
    
</style>
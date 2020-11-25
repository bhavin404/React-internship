import React, { Component, Fragment } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class editData extends Component {

    constructor(props){
        super(props);


        this.state = {
            userId    : '',
            firstName : "",
            lastName  : "",
            email     : "",
            dob       : new Date(),
            shortBio  : "",
            users     :[]
        }
    }

    componentDidMount = () =>{
        axios.get('http://localhost:5000/data/'+this.props.match.params.id)
        .then(res =>{
            this.setState({
                userId    : res.data.userId,
                firstName : res.data.firstName,
                lastName  : res.data.lastName,
                email     : res.data.email,
                dob       : new Date(res.data.dob),
                shortBio  : res.data.shortBio,
            })
            
        })
        .catch(function(error){
            console.log(error)
        })
 
        

    }



    onchangeuserId = (e) => {
        this.setState({
            userId : e.target.value
        })
    }

    onchangefirstName = (e) =>{
        this.setState({
            firstName : e.target.value
        })
    }

    onchangelastName = (e) =>{
        this.setState({
            lastName : e.target.value
        })
    }

    onchangeemail = (e) =>{
        this.setState({
            email : e.target.value
        })
    }

    onchangedob = (date) =>{
        this.setState({
            dob : date
        })
    }

    onchangeshortBio = (e) =>{
        this.setState({
            shortBio : e.target.value
        })
    }

    onSubmit= (e) =>  {
        e.preventDefault();

        const data = {
            userId    : this.state.userId,
            firstName : this.state.firstName,
            lastName  : this.state.lastName,
            email     : this.state.email    ,
            dob       : this.state.dob,
            shortBio  : this.state.shortBio
         }
         console.log(data);

         axios.post('http://localhost:5000/data/update/'+this.props.match.params.id, data)
         .then(res => console.log(res.data))

    }


 
    render() {
        return (
            <Fragment>
             <h1> Edit Exercise</h1> 

             <form onSubmit={this.onSubmit} class="container">
            <div class="form-group">
                <label for="exampleInputEmail1">
                    user ID :
                </label>

                <input 
                type="text" 
                class="form-control" 
                id="exampleInputEmail1" 
                value = {this.state.userId}
                onChange = {this.onchangeuserId}
                required
                />
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">
                    First Name :
                </label>

                <input 
                type="text" 
                class="form-control" 
                id="exampleInputEmail1" 
                value={this.state.firstName}
                onChange={this.onchangefirstName}
                required
                />
            </div><div class="form-group">
                <label for="exampleInputEmail1">
                    Last Name :
                </label>

                <input 
                type="text" 
                class="form-control" 
                id="exampleInputEmail1" 
                value={this.state.lastName}
                onChange={this.onchangelastName}
                required
                />
            </div><div class="form-group">
                <label for="exampleInputEmail1">
                    Email:
                </label>

                <input 
                type="text" 
                class="form-control" 
                id="exampleInputEmail1" 
                value={this.state.email}
                onChange={this.onchangeemail}
                 required
                 />
            </div><div class="form-group">
                <label for="exampleInputEmail1">
                    Date OF birth :
                </label>

                <DatePicker
                selected = {this.state.dob}
                onChange = {this.onchangedob}
                required
                />
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">
                    Short Bio :
                </label>

                <input 
                type="text" 
                class="form-control" 
                id="exampleInputEmail1" 
                value={this.state.shortBio}
                onChange={this.onchangeshortBio}
                required
                />
           </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            </Fragment>
        )
    }
} 


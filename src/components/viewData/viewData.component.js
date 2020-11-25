import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'; 

    const Datas = props =>{
        <tr>
            <td>{props.dataa.id}</td>
            <td>{props.dataa.firstName}</td>
            <td>{props.dataa.lastName}</td>
            <td>{props.dataa.email}</td>
            <td>{props.dataa.dob}</td>
            <td>{props.dataa.shortBio}</td>  
            <td>
                <Link to={"/edit/"+props.dataa._id}>edit</Link> || <a href="#" onClick={()=> {props.deleteData(props.dataa._id)}}>Delete</a>
            </td>
        </tr>
    }

 export default class viewData extends Component {

    constructor(props){
        super(props)

        this.deleteData = this.deleteData.bind(this);
        this.state = {datass : []}
    }

    componentDidMount() {
        axios.get('http://localhost:5000/data/')
        .then(response => {
            console.log(response.data)
            // this.setState({datass : response.data})
        })
        .catch((error) =>{
            console.log(error)
        } )
    }

    deleteData = (id) =>{
        axios.delete('http://localhost:5000/data/'+id)
        .then(res => console.log(res.data))

        this.setState({
            data: this.state.datass.filter(el => el._id !== id)
        })

    }

    viewData =()=>{
         return this.state.datass.map(currentDatas =>{
             console.log(currentDatas);
            // return <Datas dataa ={currentDatas} deleteData={this.deleteData} key = {currentDatas._id}/>
        })
    }


    
    render() {
        return(
            <div>
                <h1> View Data</h1>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>User id</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th>Date of birth</th>
                            <th>Short bio</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   this.viewData() }
                    </tbody>
                </table>

            </div>
        )
    }

}


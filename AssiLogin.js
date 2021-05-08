import React from 'react'
import axios from 'axios';
import {useForm} from 'react-hook-form'
import {useStore,useDispatch,useSelector} from 'react-redux'
import { useState } from "react";
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import Hooklogin from './Hooklogin'
type FormValues={
username:string;
email:email;
password:password;
cpassword:password;
	}
function Assireg(){
	let [user,setUser]=useState([])
	

	const dispatch=useDispatch()
	const store=useStore()
	const log=useSelector(state=>state.login);
	console.log(log)
	const {register,handleSubmit,watch,formState: { errors }}=useForm()
	const onSubmit = data =>{
		console.log(data);

		axios.post('/register', data)
		.then((res)=>{
			console.log(res.data)
			console.log("hi")
		})
		let arr=user.concat(data)
		setUser(arr)
		 
		
	}
	console.log(watch("username" ))
	console.log(errors)

	return(
	<div>
	<h1>Registration form</h1>
	<form onSubmit={handleSubmit(onSubmit)}>
	<input {...register("username",{ required: true,maxLength: 20})}  type="string"/><br/>
	{errors.username && <p>this is require</p>}
	<input {...register("email",{ required: true })} type="email"/><br/>
	{errors.email && <p>this is require</p>}
	<input {...register("password",{ required: true })} type="password"/><br/>
	{errors.password && <p>this is require</p>}

	<input {...register("cpassword",{ required: true})} type="password"/><br/>
	{errors.cpassword && <p>this is require</p>}
	 {errors.exampleRequired && <span>This field is required</span>}
	<button>register</button>
	</form>
	
	
	</div>
	)

}
export default Assireg
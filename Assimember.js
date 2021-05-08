import axios from 'axios';
import {useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom'
import  { Redirect } from 'react-router-dom'
function Assimember(){

	
	let [companyName,setCompanyName]=useState("default company")
	useEffect(()=>{
		axios.get("/restrictedpage",{
			headers:{
				'token':localStorage.getItem('usetoken2')
			}
		})
		.then((res)=>{
			setCompanyName(res.data.company)
		}).catch((err)=>{
			console.log(err)

		})
	},[companyName])
	function logout(){
		localStorage.removeItem("usetoken2")
		

		
		alert("loged out")

	
	}
	return(<div>
		<h2>{companyName}</h2>
		<button onClick={logout}>logout</button>

		</div>)
}
export default Assimember
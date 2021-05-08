import axios from 'axios';
import jwt_decode from "jwt-decode"
import { writeStorage } from '@rehooks/local-storage';
function Assilogin2(){
	function doLogin(e){
		e.preventDefault()

		const userOb={
			email:e.target.email.value,
			password:e.target.password.value

		}
		axios.post('./login',userOb)
		.then((res)=>{
			console.log(res.data)
			var decoded = jwt_decode(res.data.token)
			console.log(decoded)
			localStorage.setItem("usetoken2",res.data.token)

		})

	}
	return(
		<div><form onSubmit={doLogin}>
		
		<input type="text" placeholder="email" name="email" />
		<input type="password" placeholder="password" name="password" />
		<button>Register</button>
		</form></div>
		)
}export default Assilogin2

import React, {useState} from "react";

function Register(){

const [form,setForm]=useState({
 name:"",
 email:"",
 phone:"",
 subject:"",
 message:""
});

const [error,setError]=useState({});


const change=(e)=>{
 setForm({
  ...form,
  [e.target.name]: e.target.value
 });
};


const submit=(e)=>{
 e.preventDefault();

 let err={};

 if(!form.name.trim())
  err.name="Please Enter Your Name";

 if(!form.email.trim())
  err.email="Please Enter Your Email";

 if(!form.phone.trim())
  err.phone="Please Enter Your Phone";

 if(!form.subject)
  err.subject="Please Enter Your Subject";

 if(!form.message.trim())
  err.message="Please Enter Your Message";


 setError(err);

};


return(
<div>

<style>{`

*{
 margin:0;
 padding:0;
 box-sizing:border-box;
 font-family:Arial;
}

.page{
 height:100vh;
 background:#198bb5;
 display:flex;
 justify-content:center;
 align-items:center;
}

.box{
 width:330px;
 background:white;
 padding:25px;
 border-radius:5px;
 box-shadow:0 5px 15px #555;
}

h2{
 text-align:center;
 margin-bottom:20px;
}

input,select,textarea{
 width:100%;
 height:45px;
 margin-top:8px;
 background:#ddd;
 border:none;
 padding:10px;
 font-size:16px;
}

textarea{
 height:60px;
}

.error{
 color:red;
 font-size:13px;
 font-weight:bold;
 height:18px;
}

button{
 display:block;
 margin:15px auto 0;
 width:130px;
 height:45px;
 border:none;
 background:#1682a8;
 color:white;
 border-radius:5px;
 font-size:18px;
}

`}</style>


<div className="page">

<form className="box" onSubmit={submit}>

<h2>Registration Form</h2>


<input
name="name"
placeholder="Name*"
value={form.name}
onChange={change}
/>
<div className="error">{error.name}</div>


<input
name="email"
placeholder="Email*"
value={form.email}
onChange={change}
/>
<div className="error">{error.email}</div>


<input
name="phone"
placeholder="Phone*"
value={form.phone}
onChange={change}
/>
<div className="error">{error.phone}</div>


<select
name="subject"
value={form.subject}
onChange={change}
>

<option value="">Subject*</option>
<option>React</option>
<option>HTML</option>
<option>CSS</option>

</select>

<div className="error">{error.subject}</div>


<textarea
name="message"
placeholder="Message*"
value={form.message}
onChange={change}
/>

<div className="error">{error.message}</div>


<button type="submit">
Submit
</button>


</form>

</div>

</div>
)

}

export default Register;
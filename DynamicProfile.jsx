import React, { useState } from "react";

function DynamicProfile() {

  const [color, setColor] = useState("#ff1764");

  return (
    <div className="page">

      <div className="card">

        <div 
          className="top"
          style={{background:color}}
        ></div>

        <div className="avatar">
          👩
        </div>

        <h2>Apeksha</h2>
        <p>Front End Developer</p>


        <div className="stats">
          <div>
            <b>1.6K</b>
            <span>Followers</span>
          </div>

          <div>
            <b>852</b>
            <span>Following</span>
          </div>
        </div>


        <button style={{background:color}}>
          Follow
        </button>

        <button className="msg">
          Message
        </button>


        <div className="colors">
          <i onClick={()=>setColor("#ff1764")}></i>
          <i onClick={()=>setColor("#2196f3")}></i>
          <i onClick={()=>setColor("#9c27b0")}></i>
          <i onClick={()=>setColor("#22c55e")}></i>
          <i onClick={()=>setColor("#f59e0b")}></i>
        </div>

      </div>


<style>{`

.page{
 height:100vh;
 display:flex;
 justify-content:center;
 align-items:center;
 background:#f2f2f2;
 font-family:Arial;
}

.card{
 width:260px;
 background:white;
 text-align:center;
 border-radius:15px;
 overflow:hidden;
 box-shadow:0 5px 20px #aaa;
}

.top{
 height:90px;
}

.avatar{
 width:85px;
 height:85px;
 border-radius:50%;
 margin:-45px auto 10px;
 background:white;
 border:5px solid white;
 display:flex;
 align-items:center;
 justify-content:center;
 font-size:45px;
}

h2{
 margin:5px;
}

p{
 color:#777;
}

.stats{
 display:flex;
 justify-content:space-around;
 margin:20px;
}

span{
 display:block;
 font-size:12px;
 color:#777;
}

button{
 border:none;
 padding:6px 18px;
 border-radius:20px;
 color:white;
 margin:4px;
 font-size:12px;
}

.msg{
 background:white;
 color:#ff1764;
 border:1px solid #ff1764;
 padding:6px 18px;
}

.colors{
 margin:20px;
}

i{
 display:inline-block;
 width:15px;
 height:15px;
 border-radius:50%;
 margin:7px;
 cursor:pointer;
}

i:nth-child(1){background:#ff1764}
i:nth-child(2){background:#2196f3}
i:nth-child(3){background:#9c27b0}
i:nth-child(4){background:#22c55e}
i:nth-child(5){background:#f59e0b}

`}</style>

    </div>
  );
}

export default DynamicProfile;
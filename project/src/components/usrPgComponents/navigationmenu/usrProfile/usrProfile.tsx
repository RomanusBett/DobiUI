import React from "react";
import './usrProfile.css'

const UsrProfileBox:React.FC = ()=>{
      return(
        <div className="profile-big-container">
            <div className="profile-pic-box">
              <img className='usr-profile-pic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1EaRUdc2ZQNoe6mVspPBFaYqvnxbhZHx0Q&usqp=CAU" alt="" />
            </div>
        </div>
      )
}
export default UsrProfileBox;
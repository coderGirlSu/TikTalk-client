import './message.css'
import { getAuth } from "firebase/auth";
import React from 'react'

function Message({data}) {
  const auth = getAuth()

  return (
    <div className= {data.senderId === auth.currentUser.uid ? "message own" : "message"}>
        <div className="message-top">
          <div className="sender-name">
            {data.senderName}
            </div>
            {/* <img className="message-image" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=pexels-stefan-stefancik-91227.jpg&fm=jpg&_gl=1*nmfcye*_ga*NzgwNjU2MzM1LjE2NjgxNTI0MzY.*_ga_8JE65Q40S6*MTY2ODMzMDAzMy41LjEuMTY2ODMzMjIzMy4wLjAuMA.." alt="" /> */}
            {/* <p className='messages-ghost'>👻</p> */}
            <p className="message-text">{data.message}</p>
        </div>
        <div className="message-bottom">
        {new Date(data.createdAt).toLocaleString()}
        </div>
        
    </div>
  )
}

export default Message
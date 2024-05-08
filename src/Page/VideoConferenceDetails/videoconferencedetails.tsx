// import { useEffect, useState } from 'react';
// import './videoconferencedetails.css'
// import { Participant } from './videoconferencedetail.ts';
const VideoConferenceDetails = (props:{roomName:string,userToken:string}) =>{
 const {roomName} = props;

//  const [participants,setParticipants] = useState([]);


  
  //   const getParticipants = async () => {
  //       try {
  //     const resp = await fetch(`http://localhost:3000/getParticipants?roomName=${roomName}`);
  //     const response = await resp.json();
  //     setParticipants(response.data)

    
  //   } catch (error) {
  //     console.error('Error fetching participants', error);
  //   }
    
  // }


  return(<></>
    // <div className="n-video-conference-details">
    // <button className="n-get-participants-button" onClick={()=>getParticipants()}>Get Participants</button>
    // <div className="n-video-conference-details-participants">
    // {
    //   participants.map((participant:Participant,i)=>{
    //     return(
    //       <div className="n-video-conference-details-participant"  key={participant.identity}>
    //         <div className="n-video-conference-details-participant-name">{i+1} : {participant.identity}</div>
    //       </div>
    //     )
    //   })
    // }
    // </div>
    // </div>

  )
}

export default VideoConferenceDetails;





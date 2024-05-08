// import { useState } from "react";

// const CreateRoom = () => {
//   const [roomName,setRoomName] = useState<string>("");
//   const [totalParticipants,setTotalParticipants] = useState<number>(2); 
//   const [isRoomCreated,setIsRoomCreated] = useState<boolean>(false); 
//   const createRoomHandler = async () => {
     


//     try {
//       const resp = await fetch(`http://localhost:3000/createRoom?roomName=${roomName}&participantNumber=${totalParticipants}`);
//       const response = await resp.json();;
//       console.log(response);
//       setIsRoomCreated(true);
//     } catch (error) {
//       console.error('Error fetching token:', error);
//       setIsRoomCreated(false);
//     }
//   }
//   return(
//     <div>
//         <input type="text" placeholder="Room Name" value={roomName} onChange={(e)=>setRoomName(e.target.value)}/>
//         <input type="number" placeholder="Total number of participants" value={totalParticipants} onChange={(e)=> setTotalParticipants(parseInt(e.target.value))}/>
//         <button onClick={()=>createRoomHandler()}>Create Room</button>
//         {isRoomCreated && <div>Room created successfully</div>}
//         {}
//     </div>
//   )
// }

// export default CreateRoom;
// import { LocalUserChoices, PreJoin } from "@livekit/components-react";
// import { useState } from "react";
// export default () => {

//     const [roomName, setRoomName] = useState<string>("");
//     const [isRoomNameValid, setIsRoomNameValid] = useState(false);

//     const roomEnterHandler = async (choices:LocalUserChoices) => {
//         try {
//           const resp = await fetch(`http://localhost:3000/getToken?roomName=${roomName}&participantName=${choices.username}`);
//           const text = await resp.text();
//           setToken(text);
//         } catch (error) {
//           console.error('Error fetching token:', error);
//         }
//       }

// if(roomName === "" || isRoomNameValid===false) {
//     return(
//         <div>
//             <input type="text" value={roomName} onChange={(e)=>{
//                 setRoomName(e.target.value)
//             }}/>
//             <button onClick={()=>{
//                 setIsRoomNameValid(true);
//             }}>Submit</button>
//         </div>
//     )
// }

//   return (
//  <div>
//   <PreJoin onSubmit={(a)=>{
//     roomEnterHandler(a)
//   }}/>
//  </div>
//   );
// }

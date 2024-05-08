import "@livekit/components-styles";
import {
  //   LiveKitRoom,
  //   VideoConference,
  //   GridLayout,
  //   ParticipantTile,
  //   useTracks,
  //   LayoutContextProvider,
  //   formatChatMessageLinks,
  PreJoin,
  LocalUserChoices,
  //   TrackToggle
} from "@livekit/components-react";
// import { Track } from 'livekit-client';
import { useState } from "react";
import "./joinroom.css";
import VideoConferenceComponent from "../VideoConference/videoconference.tsx";
import VideoConferenceDetails from "../VideoConferenceDetails/videoconferencedetails.tsx";

const JoinRoom = () => {
  // TODO: get user input for room and name
  //   const [userName,setUserName] = useState("");
  const [roomName, setRoomName] = useState<string>("");
  //   const [isVideoOpen,setIsVideoOpen] = useState(true)
  //   const [isAudioOpen,setIsAudioOpen] = useState(true)
  const [token, setToken] = useState<string>("");
  const [isRoomNameValid, setIsRoomNameValid] = useState(false);
  const [userChoices, setUserChoices] = useState<
    LocalUserChoices | undefined
  >();
  const [isRoomAvailable, setIsRoomAvailable] = useState(true);
  const [isRoomFull, setIsRoomFull] = useState(false);
  //   const serverUrl = 'http://127.0.0.1:7880';
  //   const serverUrl = 'wss://test-app-ev2paxwn.livekit.cloud';
  //   const token2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTQ5MjgzMTUsImlzcyI6IkFQSWhreFRaZGRpd05rVSIsIm5iZiI6MTcxNDkyMTExNSwic3ViIjoicXVpY2tzdGFydCB1c2VyIHppcTk1MyIsInZpZGVvIjp7ImNhblB1Ymxpc2giOnRydWUsImNhblB1Ymxpc2hEYXRhIjp0cnVlLCJjYW5TdWJzY3JpYmUiOnRydWUsInJvb20iOiJxdWlja3N0YXJ0IHJvb20iLCJyb29tSm9pbiI6dHJ1ZX19.DWhQVqgIqj1Q-pXWJ53N4lWv8etlzfZnR3PnuZOqozc';

  const roomEnterHandler = async (a: LocalUserChoices) => {
    try {
      const resp = await fetch(
        `http://localhost:3000/getToken?roomName=${roomName}&participantName=${a.username}`
      );
      console.log(resp);
      const text = await resp.text();
      //   setIsAudioOpen(a.audioEnabled);
      //   setIsVideoOpen(a.videoEnabled);
      setUserChoices(a);
      setToken(text);
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  };

  const removeToken = () => {
    setToken("");
  };

  const roomExistsHandler = async () => {
    setIsRoomFull(false);
    if (roomName !== "") {
      try {
        const resp = await fetch(
          `http://localhost:3000/roomAvailable?roomName=${roomName}`
        );
        const response = await resp.json();
        if (response.info === "Room available") {
          setIsRoomAvailable(true);
          if (response.room.maxParticipants > response.room.numParticipants) {
            setIsRoomFull(false);
            setIsRoomNameValid(true);
          } else {
            setIsRoomFull(true);
            setIsRoomNameValid(false);
          }
          
        } else {
          setIsRoomAvailable(false);
          setIsRoomNameValid(false);
        }
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    }
  };

  if (roomName === "" || isRoomNameValid === false) {
    return (
      <div className="n-room-name-form-container">
        <div className="n-room-name-form">
          <div className="n-enter-a-room-text">Enter a Room</div>
          <input
            placeholder="Room Name"
            className="n-room-name-input"
            type="text"
            value={roomName}
            onChange={(e) => {
              setRoomName(e.target.value);
            }}
          />
          <button
            disabled={roomName === ""}
            className="n-room-name-button"
            onClick={() => {
              roomExistsHandler();
            }}
          >
            Submit
          </button>
          {!isRoomAvailable && <div>Room is not available, Create one!</div>}
          {isRoomFull && <div>Room is full</div>}
        </div>
      </div>
    );
  } else if (roomName !== "" && isRoomNameValid === true && token === "")
    return (
      <div className="n-room-name-form-container">
        <PreJoin
          onSubmit={(a) => {
            roomEnterHandler(a);
          }}
        />
      </div>
    );
  else {
    return (
      <div className="n-video-conference-container">
        <VideoConferenceComponent
          userToken={token}
          userChoices={userChoices}
          removeToken={removeToken}
        />
        <VideoConferenceDetails roomName={roomName} userToken={token} />
      </div>
    );
  }
};

// else{
//   return (
//     <LayoutContextProvider>
//     <LiveKitRoom
//       video={isVideoOpen}
//       audio={isAudioOpen}
//       token={token}
//       serverUrl={serverUrl}
//       onDisconnected={()=>setToken("")}

//       // Use the default LiveKit theme for nice styles.
//       data-lk-theme="default"
//       style={{ height: '100dvh' }}
//     >
//         {/* <ToggleChat /> */}
//         {/* <Chat/>
//         <ClearPinButton>Back to grid view</ClearPinButton> */}
//             {/* <ChatEntry entry={}/> */}
//         {/* </Chat> */}

//         {/* <ChatToggle /> */}
//       {/* Your custom component with basic video conferencing functionality. */}
//       {/* <MyVideoConference/> */}
//       <VideoConference  chatMessageFormatter={formatChatMessageLinks}/>
//       {/* The RoomAudioRenderer takes care of room-wide audio for you. */}
//       {/* <RoomAudioRenderer /> */}
//       {/* <Chat/> */}
//       {/* Controls for the user to start/stop audio, video, and screen
//       share tracks and to leave the room. */}
//       {/* <ControlBar/> */}
//     </LiveKitRoom>
//     </LayoutContextProvider>
//   );
// }
// }

export default JoinRoom;

// function MyVideoConference() {
//   // `useTracks` returns all camera and screen share tracks. If a user
//   // joins without a published camera track, a placeholder track is returned.
//   const tracks = useTracks(
//     [
//       { source: Track.Source.Camera, withPlaceholder: true },
//       { source: Track.Source.ScreenShare, withPlaceholder: false },
//             { source: Track.Source.Microphone, withPlaceholder: false },
//                         { source: Track.Source.ScreenShareAudio, withPlaceholder: false },
//                         { source: Track.Source.Unknown, withPlaceholder: false },
//     ],
//     { onlySubscribed: false,},

//   );
//   return (
//     <GridLayout  tracks={tracks} style={{ height: 'calc(100vh - var(--lk-control-bar-height))' }}>
//       {/* The GridLayout accepts zero or one child. The child is used
//       as a template to render all passed in tracks. */}
//       <ParticipantTile/>
//     </GridLayout>
//   );
// }

// LIVEKIT_API_KEY=APIhkxTZddiwNkU
// LIVEKIT_API_SECRET=E0EZV9ineoIDX8WRnKiE2JABUGfh0JsnOby0Yxkce9QB

// LIVEKIT_API_KEY=devkey
// LIVEKIT_API_SECRET=secret

//livekit-server --dev

import { useState } from "react";
import "./createroom.css";
import { Link } from "react-router-dom";

const CreateRoom = () => {
  const [roomName, setRoomName] = useState<string>("");
  const [totalParticipants, setTotalParticipants] = useState<number>(2);
  const [isRoomCreated, setIsRoomCreated] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");
  const createRoomHandler = async () => {
    if (roomName !== "" && totalParticipants > 1) {
      try {
        const resp = await fetch(
          `http://localhost:3000/createRoom?roomName=${roomName}&participantNumber=${totalParticipants}`
        );
        const response = await resp.json();
        console.log(response);
        setErrorMessage("");
        setIsRoomCreated(true);
      } catch (error) {
        setErrorMessage("Error fetching token");
        setIsRoomCreated(false);
      }
    } else {
      setErrorMessage(
        "Please enter a valid room name and number of participants"
      );
    }
  };

  const onNumberOfParticipantsChangeHandler = (value: string) => {
    if (value !== "") {
      setTotalParticipants(parseInt(value));
    }
  };
  return (
    <div className="n-create-room">
      <div className="n-create-room-form">
        <div className="n-create-a-room-text">Create a Room!</div>

        <input
          className="n-create-room-roomname"
          type="text"
          placeholder="Room Name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <input
          className="n-create-room-participants"
          type="number"
          placeholder="Total number of participants"
          value={totalParticipants}
          onChange={(e) => onNumberOfParticipantsChangeHandler(e.target.value)}
        />
        <button
          className="n-create-room-button"
          onClick={() => createRoomHandler()}
        >
          Create
        </button>
        {isRoomCreated && errorMessage === "" && (
          <div className="n-room-created-successfully">
            Room created successfully 
            <Link to={'/joinroom'} className="n-join-room-link">join room</Link>
          </div>
        )}
        {errorMessage !== "" && (
          <p className="n-create-room-error-message">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default CreateRoom;

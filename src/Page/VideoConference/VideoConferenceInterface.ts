import { LocalUserChoices } from "@livekit/components-react";

export interface VideoConferenceInterfaceProps {
    userToken: string;
    userChoices : LocalUserChoices | undefined;
    removeToken: () => void
}

export interface Participant {
    sid: string;
    identity: string;
    state: string;
    tracks: any[]; // Assuming tracks can be of any type
    metadata: string;
    joinedAt: string; // This may need to be parsed as a date
    name: string;
    version: number;
    permission: {
      canSubscribe: boolean;
      canPublish: boolean;
      canPublishData: boolean;
      hidden: boolean;
      recorder: boolean;
      canPublishSources: string[]; // Assuming canPublishSources is an array of string
      canUpdateMetadata: boolean;
      agent: boolean;
    };
    region: string;
    isPublisher: boolean;
    kind: string;
  }
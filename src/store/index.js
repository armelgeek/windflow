import { syncedStore, getYjsDoc } from "@syncedstore/core";
import { WebrtcProvider } from "y-webrtc";

export const store = syncedStore({ todos: [], fragment: "xml" });
const doc = getYjsDoc(store);
export const webrtcProvider = new WebrtcProvider("syncedstore-todos", doc);
export const disconnect = () => webrtcProvider.disconnect();
export const connect = () => webrtcProvider.connect();

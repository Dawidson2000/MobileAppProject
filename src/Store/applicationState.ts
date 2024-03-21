import store from "./store";

export type ApplicationState = ReturnType<typeof store.getState>

import firebase from 'firebase';

const config = {
  projectId: "chat-app-d374a",
  apiKey: "AIzaSyAqqUNxzj7wvT3U1d-oYPQdcKN0XBCNHy8",
  databaseURL: "https://chat-app-d374a-default-rtdb.firebaseio.com",
  };
firebase.initializeApp(config);

export default firebase;
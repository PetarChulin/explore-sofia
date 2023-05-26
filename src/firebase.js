import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "your_apiKey",
  authDomain: "your_authDomain",
  databaseURL: "your_databaseURL",
  projectId: "your_ProjectId",
  storageBucket: "your_storageBucket",
  messagingSenderId: "your_messagingSenderId",
  appId: "your_appId"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

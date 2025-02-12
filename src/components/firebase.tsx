import { initializeApp } from "@firebase/app";
import { getFirestore  } from "@firebase/firestore";
import { getAuth  } from "firebase/auth";
import { getStorage  } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCs4HaxjCCcZ3pWEh0e78hL1q3ikC3RVnI",
	authDomain: "dental-record-system-c0695.firebaseapp.com",
	projectId: "dental-record-system-c0695",
	storageBucket: "dental-record-system-c0695.appspot.com",
	messagingSenderId: "446706234689",
	appId: "1:446706234689:web:bf0ba66243dc8568ee5dc0",
	measurementId: "G-8PHMT0LBN7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// connectFirestoreEmulator(db, "localhost", 8080);
// connectAuthEmulator(auth, "http://localhost.:9099");
// connectStorageEmulator(storage, "localhost", 9199);

export { app, db, auth, storage };

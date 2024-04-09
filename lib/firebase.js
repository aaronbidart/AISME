// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore"; // Modified to include serverTimestamp
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8I3cHpBcaPDqQeMiYjiWATy4T7b6Zcww",
  authDomain: "my-nextjs-project-b0184.firebaseapp.com",
  projectId: "my-nextjs-project-b0184",
  storageBucket: "my-nextjs-project-b0184.appspot.com",
  messagingSenderId: "781889690420",
  appId: "1:781889690420:web:6fb5afde13d66c63446361"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

// Example function to save an email with a timestamp
async function saveEmail(email) {
  const docRef = await addDoc(collection(db, "emails"), {
    email: email,
    createdAt: serverTimestamp(),
  });
  console.log("Document written with ID: ", docRef.id);
}

// Example function to fetch an email and display its timestamp
async function displayEmailTimestamp(emailId) {
  const docRef = doc(db, "emails", emailId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const emailData = docSnap.data();
    const timestamp = emailData.createdAt.toDate();
    const formattedTimestamp = timestamp.toLocaleString(); // Converts to a readable format
    console.log(`Email was collected on: ${formattedTimestamp}`);
    // Display this message to the user in your UI
  } else {
    console.log("No such document!");
  }
}

export { db, saveEmail, displayEmailTimestamp };

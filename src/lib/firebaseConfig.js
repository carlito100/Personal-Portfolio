// /src/lib/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAZc0MeKHbISt9GbriAD7CV1IOLgORgB38",
  authDomain: "portfolio-785b1.firebaseapp.com",
  projectId: "portfolio-785b1",
  storageBucket: "portfolio-785b1.firebasestorage.app",
  messagingSenderId: "436315252074",
  appId: "1:436315252074:web:58fb4a85511522ff1c3113",
  measurementId: "G-YNQ7BQ7SQR"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}
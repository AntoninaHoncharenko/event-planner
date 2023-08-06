import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC3IKbx44ZaT_5uEI4W2W15s3l7I9YGxpA',
  authDomain: 'event-planer-58075.firebaseapp.com',
  projectId: 'event-planer-58075',
  storageBucket: 'event-planer-58075.appspot.com',
  messagingSenderId: '729527165491',
  appId: '1:729527165491:web:c9c98b1230ce9e96e13946',
  measurementId: 'G-357DVYZYHR',
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

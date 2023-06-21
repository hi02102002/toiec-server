import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA-V-WUAkU2IjrqgS8TcKvBVwcGuau4MeM',
  authDomain: 'toiec-4f005.firebaseapp.com',
  projectId: 'toiec-4f005',
  storageBucket: 'toiec-4f005.appspot.com',
  messagingSenderId: '454156138244',
  appId: '1:454156138244:web:2ab9714cf62e6d5afa4251',
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

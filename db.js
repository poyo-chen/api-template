import * as admin from 'firebase-admin';
import { serviceAccount } from './doc/nodefirebasetest-13b1e-firebase-adminsdk-ym6fo-ff15a17d32.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

export default db;

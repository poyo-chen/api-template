import * as admin from 'firebase-admin';
import serviceAccount from '../nodefirebasetest-13b1e-firebase-adminsdk-ym6fo-ff15a17d32.json';
import { UserDto } from './user.dto';
import { UsersDto } from './users.dto';

class FireStoreService {
  private firestore: FirebaseFirestore.Firestore;
  constructor() {
    this.init();
    this.firestore = admin.firestore();
  }

  init() {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: serviceAccount.project_id,
        clientEmail: serviceAccount.client_email,
        privateKey: serviceAccount.private_key.replace(/\\n/g, '\n')
      })
    });
  }

  async update(users: Array<UserDto>) {
    const docRef = this.firestore.collection('home').doc('aloveplace');
    return await docRef.set({ users: users });
  }

  async save(user: UserDto) {
    const doc: string = user.id.toString();
    const docRef = this.firestore.collection('home').doc(doc);
    return await docRef.set({ name: user.name });
  }
  async getAll() {
    const docRef = this.firestore.collection('home').doc('aloveplace');
    const data = await docRef.get();
    return <UsersDto>data.data();
  }
  async getById(id: string) {
    const docRef = this.firestore.collection('home').doc(id);
    const data = await docRef.get();
    return data.data();
  }
  async getHome() {
    const docRef = this.firestore.collection('home').doc('aloveplace');
    const data = await docRef.get();
    return <UsersDto>data.data();
  }
}
export default new FireStoreService();

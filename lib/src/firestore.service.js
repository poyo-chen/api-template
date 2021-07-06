"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin = __importStar(require("firebase-admin"));
const nodefirebasetest_13b1e_firebase_adminsdk_ym6fo_ff15a17d32_json_1 = __importDefault(require("../nodefirebasetest-13b1e-firebase-adminsdk-ym6fo-ff15a17d32.json"));
class FireStoreService {
    constructor() {
        this.init();
        this.firestore = admin.firestore();
    }
    init() {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: nodefirebasetest_13b1e_firebase_adminsdk_ym6fo_ff15a17d32_json_1.default.project_id,
                clientEmail: nodefirebasetest_13b1e_firebase_adminsdk_ym6fo_ff15a17d32_json_1.default.client_email,
                privateKey: nodefirebasetest_13b1e_firebase_adminsdk_ym6fo_ff15a17d32_json_1.default.private_key.replace(/\\n/g, '\n')
            })
        });
    }
    update(users) {
        return __awaiter(this, void 0, void 0, function* () {
            const docRef = this.firestore.collection('home').doc('aloveplace');
            return yield docRef.set({ users: users });
        });
    }
    save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = user.id.toString();
            const docRef = this.firestore.collection('home').doc(doc);
            return yield docRef.set({ name: user.name });
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const docRef = this.firestore.collection('home').doc('aloveplace');
            const data = yield docRef.get();
            return data.data();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const docRef = this.firestore.collection('home').doc(id);
            const data = yield docRef.get();
            return data.data();
        });
    }
    getHome() {
        return __awaiter(this, void 0, void 0, function* () {
            const docRef = this.firestore.collection('home').doc('aloveplace');
            const data = yield docRef.get();
            return data.data();
        });
    }
}
exports.default = new FireStoreService();
//# sourceMappingURL=firestore.service.js.map
"use strict";
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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const users_service_1 = __importDefault(require("./users.service"));
const firestore_service_1 = __importDefault(require("./firestore.service"));
const app = express_1.default();
app.use(cors_1.default({ origin: true }));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
const stage = express_1.default.Router();
// Middleware
const myLogging = (req, res, next) => {
    console.log('req: ', req.body);
    next();
};
app.use(myLogging);
app.use('/stage', stage);
stage.get('/data', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield users_service_1.default.listAll();
    res.send(users);
}));
stage.get('/data/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield firestore_service_1.default.getById(req.params.userId);
    res.send(users);
}));
stage.post('/data', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const obj = req.body;
    const user = Object.assign(Object.assign({}, obj), { id: new Date().getTime() });
    yield firestore_service_1.default.save(user);
    // await usersService.create(user);
    const users = yield users_service_1.default.listAll();
    res.status(200).send(users).end();
}));
stage.get('/test', (req, res) => {
    res.send('OK');
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('🚀 Server ready on port', port);
});
//# sourceMappingURL=index.js.map
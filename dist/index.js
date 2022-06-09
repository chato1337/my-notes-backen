/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./components/notes/controller.js":
/*!****************************************!*\
  !*** ./components/notes/controller.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const store = __webpack_require__(/*! ./store */ \"./components/notes/store.js\");\n\nfunction getNotes() {\n\treturn new Promise((resolve, reject) => {\n\t\tresolve(store.list());\n\t});\n}\n\nfunction addNote(request) {\n\tconsole.log(request);\n\treturn new Promise((resolve, reject) => {\n\t\tresolve(store.add(request));\n\t});\n}\n\nfunction editNote(request) {\n\tconsole.log(request)\n\treturn new Promise((resolve, reject) => {\n\t\tresolve(store.edit(request))\n\t})\n}\n\nfunction deleteNote(request) {\n\treturn new Promise((resolve, reject) => {\n\t\tresolve(store.delete(request))\n\t})\n}\n\nmodule.exports = {\n\tgetNotes,\n\taddNote,\n\teditNote,\n\tdeleteNote\n};\n\n\n//# sourceURL=webpack://my-notes-backend/./components/notes/controller.js?");

/***/ }),

/***/ "./components/notes/model.js":
/*!***********************************!*\
  !*** ./components/notes/model.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst Schema = mongoose.Schema;\n\nconst noteSchema = new Schema({\n\ttitle: String,\n\tbody: String,\n\tfooter: String,\n});\n\n//add color note\nnoteSchema.add({\n\tcolor: String,\n})\n\nnoteSchema.add({\n\tappend: Object,\n})\n\nconst model = mongoose.model(\"notes\", noteSchema);\n\nmodule.exports = model;\n\n\n//# sourceURL=webpack://my-notes-backend/./components/notes/model.js?");

/***/ }),

/***/ "./components/notes/network.js":
/*!*************************************!*\
  !*** ./components/notes/network.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst router = express.Router();\nconst controller = __webpack_require__(/*! ./controller */ \"./components/notes/controller.js\");\n\nrouter.get(\"/\", (req, res) => {\n\tcontroller\n\t\t.getNotes()\n\t\t.then((notesList) => {\n\t\t\t// console.log(notesList);\n\t\t\tres.send(notesList);\n\t\t})\n\t\t.catch((error) => console.log(error));\n});\n\nrouter.post(\"/note\", (req, res) => {\n\tcontroller\n\t\t.addNote(req.body)\n\t\t.then((respose) => {\n\t\t\tconsole.log(\"guardados correctamente\");\n\t\t\tres.send(\"datos guardados\");\n\t\t})\n\t\t.catch((error) => console.log(error));\n});\n\nrouter.put(\"/edit-note\", (req, res) => {\n\t//do it something\n\tcontroller\n\t\t.editNote(req.body)\n\t\t\t.then(response => {\n\t\t\t\tconsole.log('nota actualizada')\n\t\t\t\tres.send(\"nota actualizada\")\n\t\t\t})\n\t\t\t.catch(err => console.log(err))\n})\n\nrouter.delete(\"/delete\", (req, res) => {\n\tcontroller\n\t\t.deleteNote(req.body)\n\t\t\t.then(response => {\n\t\t\t\tconsole.log(\"nota eliminada\");\n\t\t\t\tres.send(\"nota eliminada\")\n\t\t\t})\n\t\t\t.catch(err => console.log(err))\n})\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack://my-notes-backend/./components/notes/network.js?");

/***/ }),

/***/ "./components/notes/store.js":
/*!***********************************!*\
  !*** ./components/notes/store.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Model = __webpack_require__(/*! ./model */ \"./components/notes/model.js\");\nconst response = __webpack_require__(/*! ../../network/response */ \"./network/response.js\")\n\nasync function getNotes() {\n\tconst notes = await Model.find();\n\treturn notes;\n}\n\nasync function addNote(request) {\n\tconsole.log(request);\n\tconst newNote = new Model(request);\n\tnewNote.save();\n}\n\nasync function setNote(request) {\n\tconst id = {_id: request._id}\n\tconst newData = {\n\t\ttitle: request.title,\n\t\tbody: request.body,\n\t\tfooter: request.footer,\n\t\tcolor: request.color\n\t}\n\tModel.updateOne(id, newData, response.handleError)\n}\n\nasync function deleteNote(request) {\n\tModel.findOneAndDelete(request, null, response.handleError)\n}\n\nmodule.exports = {\n\tlist: getNotes,\n\tadd: addNote,\n\tedit: setNote,\n\tdelete: deleteNote\n};\n\n\n//# sourceURL=webpack://my-notes-backend/./components/notes/store.js?");

/***/ }),

/***/ "./components/users/controller.js":
/*!****************************************!*\
  !*** ./components/users/controller.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const store = __webpack_require__(/*! ./store */ \"./components/users/store.js\")\n\nfunction login(request) {\n    return new Promise((resolve, reject) => {\n        resolve(store.checkLogin(request))\n    })\n}\n\nfunction register(request) {\n    return new Promise((resolve, reject) => {\n        resolve(store.add(request))\n    })\n}\n\nfunction getUsers() {\n    return new Promise((resolve, reject) => {\n        resolve(store.list())\n    })\n}\n\nmodule.exports = {\n    login,\n    register,\n    getUsers\n}\n\n//# sourceURL=webpack://my-notes-backend/./components/users/controller.js?");

/***/ }),

/***/ "./components/users/model.js":
/*!***********************************!*\
  !*** ./components/users/model.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\")\n\nconst Schema = mongoose.Schema\n\nconst userSchema = new Schema({\n    username: String,\n    email: String,\n    password: String,\n    role: String\n})\n\nuserSchema.add({\n    country: String\n})\n\nconst model = mongoose.model(\"users\", userSchema)\n\nmodule.exports = model\n\n//# sourceURL=webpack://my-notes-backend/./components/users/model.js?");

/***/ }),

/***/ "./components/users/network.js":
/*!*************************************!*\
  !*** ./components/users/network.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst router = express.Router();\nconst controller = __webpack_require__(/*! ./controller.js */ \"./components/users/controller.js\");\nconst { checkApiKey } = __webpack_require__(/*! ../../middleware/auth.handler */ \"./middleware/auth.handler.ts\");\nconst passport = __webpack_require__(/*! passport */ \"passport\");\n\nrouter.post(\n\t\"/login\",\n\tpassport.authenticate(\"local\", { session: false }),\n\t(req, res) => {\n\t\tcontroller\n\t\t\t.login(req.body)\n\t\t\t.then((authToken) => {\n\t\t\t\tres.json(authToken)\n\t\t\t})\n\t\t\t.catch((e) => console.log(e));\n\t}\n);\n\nrouter.post(\"/signup\", (req, res) => {\n\tcontroller\n\t\t.register(req.body)\n\t\t.then((auth) => {\n\t\t\tconsole.log(auth);\n\t\t\tres.send(auth);\n\t\t})\n\t\t.catch((e) => console.log(e));\n});\n\nrouter.get(\"/customers\", checkApiKey, (req, res) => {\n\tcontroller\n\t\t.getUsers()\n\t\t.then((userList) => res.send(userList))\n\t\t.catch((err) => console.log(err));\n});\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack://my-notes-backend/./components/users/network.js?");

/***/ }),

/***/ "./components/users/store.js":
/*!***********************************!*\
  !*** ./components/users/store.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Model = __webpack_require__(/*! ./model */ \"./components/users/model.js\")\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\")\nconst config = __webpack_require__(/*! ../../config */ \"./config/index.js\")\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\")\nconst { signToken } = __webpack_require__(/*! ../../middleware/auth.handler */ \"./middleware/auth.handler.ts\")\n\nasync function getUsers() {\n    const users = await Model.find()\n    return users\n}\n\nasync function add(request) {\n    if (!request.password) {\n        return \"invalid password\"\n    }\n\n    const user = {\n        username: request.username,\n        email: request.email,\n        password: await bcrypt.hash(request.password, 10),\n        role: request.role || 'user',\n        country: request.country || 'col'\n    }\n\n    const newUser = new Model(user)\n    newUser.save()\n    return newUser\n}\n\nasync function checkLogin(request) {\n    const userFilter = {username: request.username}\n    // console.log(userFilter);\n    const user = await Model.findOne(userFilter)\n    \n    const payload = {\n        sub: user._id,\n        role: user.role\n    }\n\n    return { user, token: signToken(payload, config.secret) }\n}\n\nmodule.exports = {\n    add: add,\n    checkLogin: checkLogin,\n    list: getUsers\n}\n\n//# sourceURL=webpack://my-notes-backend/./components/users/store.js?");

/***/ }),

/***/ "./config/database.js":
/*!****************************!*\
  !*** ./config/database.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const db = __webpack_require__(/*! mongoose */ \"mongoose\");\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)()\n\nconst uri = process.env.DATABASE_URL\n\ndb.Promise = global.Promise;\n\ndb.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })\n\t.then(() => console.log(`base de datos conectada con exito`))\n\t.catch((err) => console.error(`error al conectar la base de datos: ${err}`));\n\n\n//# sourceURL=webpack://my-notes-backend/./config/database.js?");

/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("(__webpack_require__(/*! dotenv */ \"dotenv\").config)()\n__webpack_require__(/*! ./database */ \"./config/database.js\")\n\nmodule.exports = {\n\tport: process.env.PORT || 3001,\n\thost: process.env.HOST || \"http://localhost\",\n\tdbUri: process.env.DATABASE_URL,\n\t//user admin\n\tusername: \"lalo\",\n\tpassword: \"landa\",\n\temail: \"me@me.com\",\n\tsecret: process.env.SECRET_TOKEN || \"my-notes-back\",\n\tapiKey: process.env.API_KEY || 'no-key'\n};\n\n\n//# sourceURL=webpack://my-notes-backend/./config/index.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_noteUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/noteUtils */ \"./utils/noteUtils.ts\");\n/* harmony import */ var _components_shop_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/shop/network */ \"./components/shop/network.ts\");\n/* harmony import */ var _components_shop_network__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_shop_network__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_profile_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/profile/network */ \"./components/profile/network.ts\");\n/* harmony import */ var _components_profile_network__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_profile_network__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_history_pay_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/history-pay/network */ \"./components/history-pay/network.ts\");\n/* harmony import */ var _components_history_pay_network__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_history_pay_network__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_bills_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/bills/network */ \"./components/bills/network.ts\");\n/* harmony import */ var _components_bills_network__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_bills_network__WEBPACK_IMPORTED_MODULE_5__);\n\n\nconst config = __webpack_require__(/*! ./config */ \"./config/index.js\");\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst routesNotes = __webpack_require__(/*! ./components/notes/network */ \"./components/notes/network.js\");\nconst routesUsers = __webpack_require__(/*! ./components/users/network */ \"./components/users/network.js\")\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst router = __webpack_require__(/*! ./network/routes */ \"./network/routes.js\")\nconst passport = __webpack_require__(/*! passport */ \"passport\")\n;\n\n\n\n\n_utils_noteUtils__WEBPACK_IMPORTED_MODULE_1__.NoteUtils.testTypescritp()\n\napp.use(cors());\n\napp.use(passport.initialize())\n__webpack_require__(/*! ./utils/auth */ \"./utils/auth/index.js\")\n\napp.use(bodyParser.json());\napp.use(routesNotes);\napp.use(routesUsers)\napp.use(_components_bills_network__WEBPACK_IMPORTED_MODULE_5__.router)\napp.use(_components_shop_network__WEBPACK_IMPORTED_MODULE_2__.router)\napp.use(_components_profile_network__WEBPACK_IMPORTED_MODULE_3__.router)\napp.use(_components_history_pay_network__WEBPACK_IMPORTED_MODULE_4__.router)\n\n//server on\napp.listen(config.port, () => {\n\tconsole.log(`escuchando en el puerto ${config.host}:${config.port}`);\n});\n\n\n//# sourceURL=webpack://my-notes-backend/./index.js?");

/***/ }),

/***/ "./network/response.js":
/*!*****************************!*\
  !*** ./network/response.js ***!
  \*****************************/
/***/ ((module) => {

eval("//aqui se hace una funcion para mostrar respuestas del servidor\n\nconst handleError = (err, doc) => {\n    if (err) {\n        console.log(error)\n    }\n}\n\nmodule.exports = {\n    handleError\n}\n\n//# sourceURL=webpack://my-notes-backend/./network/response.js?");

/***/ }),

/***/ "./network/routes.js":
/*!***************************!*\
  !*** ./network/routes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("//aqui se hace un redireccionador para simplificar el uso del archivo raiz\nconst express = __webpack_require__(/*! express */ \"express\")\nconst app = express()\n\nconst noteRoutes = __webpack_require__(/*! ../components/notes/network */ \"./components/notes/network.js\")\n\napp.use(noteRoutes)\n\n//# sourceURL=webpack://my-notes-backend/./network/routes.js?");

/***/ }),

/***/ "./components/bills/controller.ts":
/*!****************************************!*\
  !*** ./components/bills/controller.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.controller = void 0;\nconst store_1 = __webpack_require__(/*! ./store */ \"./components/bills/store.ts\");\nfunction getBills(userId) {\n    return new Promise((resolve, reject) => {\n        if (userId && userId.length > 0) {\n            resolve(store_1.store.list(userId));\n        }\n        else {\n            console.error('bills controller invalid username: ', userId);\n            reject(\"invalid username\");\n        }\n    });\n}\nfunction addBill(request) {\n    return new Promise((resolve, reject) => {\n        resolve(store_1.store.addBill(request));\n    });\n}\nexports.controller = {\n    getBills,\n    addBill,\n};\n\n\n//# sourceURL=webpack://my-notes-backend/./components/bills/controller.ts?");

/***/ }),

/***/ "./components/bills/model.ts":
/*!***********************************!*\
  !*** ./components/bills/model.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.model = void 0;\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst Schema = mongoose_1.default.Schema;\nconst billsSchema = new Schema({\n    user_id: String,\n    value: String,\n    date: String,\n    money: String,\n    owner_id: String,\n    extra: String,\n    status: String,\n    concept: String\n});\nexports.model = mongoose_1.default.model(\"bills\", billsSchema);\n\n\n//# sourceURL=webpack://my-notes-backend/./components/bills/model.ts?");

/***/ }),

/***/ "./components/bills/network.ts":
/*!*************************************!*\
  !*** ./components/bills/network.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.router = void 0;\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst controller_1 = __webpack_require__(/*! ./controller */ \"./components/bills/controller.ts\");\nconst passport_1 = __importDefault(__webpack_require__(/*! passport */ \"passport\"));\nexports.router = express_1.default.Router();\nexports.router.get(\"/bills\", (req, res) => {\n    controller_1.controller\n        .getBills(req.query.id)\n        .then((billList) => {\n        // console.log(billList);\n        res.send(billList);\n    })\n        .catch((error) => console.log(error));\n});\nexports.router.get(\"/bills-auth\", passport_1.default.authenticate(\"jwt\", { session: false }), (req, res) => {\n    controller_1.controller\n        .getBills(req.query.id)\n        .then((billList) => {\n        // console.log(billList);\n        res.send(billList);\n    })\n        .catch((error) => console.log(error));\n});\nexports.router.post(\"/add-bill\", (req, res) => {\n    controller_1.controller\n        .addBill(req.body)\n        .then(() => res.send(\"bill added\"))\n        .catch((err) => console.log(err));\n});\n\n\n//# sourceURL=webpack://my-notes-backend/./components/bills/network.ts?");

/***/ }),

/***/ "./components/bills/store.ts":
/*!***********************************!*\
  !*** ./components/bills/store.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.store = void 0;\nconst model_1 = __webpack_require__(/*! ./model */ \"./components/bills/model.ts\");\nfunction getBills(userId) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const filter = { user_id: userId };\n        const bills = yield model_1.model.find(filter);\n        return bills;\n    });\n}\nfunction addBill(request) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const bill = {\n            user_id: request.user_id,\n            value: request.value,\n            date: request.date,\n            money: request.money,\n            owner_id: request.owner_id,\n            extra: request.extra,\n            status: request.status,\n            concept: request.concept\n        };\n        const newBill = new model_1.model(bill);\n        newBill.save();\n        return newBill;\n    });\n}\nexports.store = {\n    list: getBills,\n    addBill\n};\n\n\n//# sourceURL=webpack://my-notes-backend/./components/bills/store.ts?");

/***/ }),

/***/ "./components/history-pay/controller.ts":
/*!**********************************************!*\
  !*** ./components/history-pay/controller.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.approve = exports.add = exports.getHistoryList = exports.getHistory = void 0;\nconst store_1 = __webpack_require__(/*! ./store */ \"./components/history-pay/store.ts\");\nfunction getHistory(id) {\n    return new Promise((resolve, reject) => {\n        if (id && id.length > 0) {\n            resolve((0, store_1.getHistoryPay)(id));\n        }\n        else {\n            reject(`id invalid ${id}`);\n        }\n    });\n}\nexports.getHistory = getHistory;\nfunction getHistoryList(id) {\n    return new Promise((resolve, reject) => {\n        if (id && id.length > 0) {\n            resolve((0, store_1.getHistoryPayList)(id));\n        }\n        else {\n            reject(`id invalid ${id}`);\n        }\n    });\n}\nexports.getHistoryList = getHistoryList;\nfunction add(pay) {\n    return new Promise((resolve, reject) => {\n        if (pay) {\n            resolve((0, store_1.addHistoryPay)(pay));\n        }\n        else {\n            reject(`pay invalid ${pay}`);\n        }\n    });\n}\nexports.add = add;\nfunction approve(ticket) {\n    return new Promise((resolve, reject) => {\n        if (ticket) {\n            resolve((0, store_1.approvePay)(ticket));\n        }\n        else {\n            reject(`ticket invalid ${ticket}`);\n        }\n    });\n}\nexports.approve = approve;\n\n\n//# sourceURL=webpack://my-notes-backend/./components/history-pay/controller.ts?");

/***/ }),

/***/ "./components/history-pay/model.ts":
/*!*****************************************!*\
  !*** ./components/history-pay/model.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.model = void 0;\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst Schema = mongoose_1.default.Schema;\nconst historyPaySchema = new Schema({\n    bill_id: String,\n    owner_id: String,\n    concept: String,\n    date: String,\n    value: String,\n    currency: String,\n    status: String\n});\nexports.model = mongoose_1.default.model(\"historyPay\", historyPaySchema);\n\n\n//# sourceURL=webpack://my-notes-backend/./components/history-pay/model.ts?");

/***/ }),

/***/ "./components/history-pay/network.ts":
/*!*******************************************!*\
  !*** ./components/history-pay/network.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.router = void 0;\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst passport_1 = __importDefault(__webpack_require__(/*! passport */ \"passport\"));\nconst controller = __webpack_require__(/*! ./controller */ \"./components/history-pay/controller.ts\");\nconst { checkApiKey } = __webpack_require__(/*! ../../middleware/auth.handler */ \"./middleware/auth.handler.ts\");\nexports.router = express_1.default.Router();\nexports.router.get(\"/history-list\", checkApiKey, passport_1.default.authenticate(\"jwt\", { session: false }), (req, res) => {\n    controller\n        .getHistoryList(req.query.id)\n        .then((history) => {\n        // console.log(billList);\n        res.send(history);\n    })\n        .catch((error) => console.log(error));\n});\nexports.router.get(\"/history\", checkApiKey, passport_1.default.authenticate(\"jwt\", { session: false }), (req, res) => {\n    controller\n        .getHistory(req.query.id)\n        .then((history) => {\n        // console.log(billList);\n        res.send(history);\n    })\n        .catch((error) => console.log(error));\n});\nexports.router.post(\"/add-pay\", checkApiKey, passport_1.default.authenticate(\"jwt\", { session: false }), (req, res) => {\n    controller\n        .add(req.body)\n        .then((payRes) => {\n        // console.log(billList);\n        res.send(payRes);\n    })\n        .catch((error) => console.log(error));\n});\nexports.router.post(\"/approve-pay\", checkApiKey, passport_1.default.authenticate(\"jwt\", { session: false }), (req, res) => {\n    controller\n        .approve(req.body)\n        .then((payRes) => {\n        // console.log(billList);\n        res.send(payRes);\n    })\n        .catch((error) => console.log(error));\n});\n\n\n//# sourceURL=webpack://my-notes-backend/./components/history-pay/network.ts?");

/***/ }),

/***/ "./components/history-pay/store.ts":
/*!*****************************************!*\
  !*** ./components/history-pay/store.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getHistoryPayList = exports.getHistoryPay = exports.approvePay = exports.addHistoryPay = void 0;\nconst model_1 = __webpack_require__(/*! ./model */ \"./components/history-pay/model.ts\");\nconst model_2 = __webpack_require__(/*! ../bills/model */ \"./components/bills/model.ts\");\nconst transactionPay = (billValue, reqValue, concept) => {\n    const OPERATIONS = {\n        credit: billValue + reqValue,\n        payAll: billValue - billValue,\n        pay: billValue - reqValue\n    };\n    const STATUS_RESULT = {\n        credit: 'approve',\n        payAll: 'pending',\n        pay: 'pending'\n    };\n    const result = OPERATIONS[concept];\n    const status = STATUS_RESULT[concept];\n    return {\n        result,\n        status\n    };\n};\nconst addHistoryPay = (pay) => __awaiter(void 0, void 0, void 0, function* () {\n    const filter = { _id: pay.id };\n    const billAccount = yield model_2.model.findOne(filter);\n    const transactionResult = transactionPay(billAccount.value, pay.value, pay.concept);\n    // update bill account value\n    yield model_2.model.findByIdAndUpdate(pay.id, { $set: { value: transactionResult.result } }, { useFindAndModify: false });\n    const newHistoryPay = {\n        bill_id: billAccount._id,\n        owner_id: billAccount.owner_id,\n        concept: pay.concept,\n        date: new Date(Date.now()).toLocaleString(),\n        value: pay.value,\n        currency: billAccount.money,\n        status: 'pending'\n    };\n    const storeHistoryPay = new model_1.model(newHistoryPay);\n    storeHistoryPay.save();\n    return storeHistoryPay;\n});\nexports.addHistoryPay = addHistoryPay;\nconst approvePay = (req) => __awaiter(void 0, void 0, void 0, function* () {\n    console.log(req);\n    const filter = { _id: req.id };\n    const ticket = yield model_1.model.findOne(filter);\n    console.log(ticket);\n    if (req.status === 'approve') {\n        yield model_1.model.updateOne(filter, { $set: { status: 'approved' } }, { useFindAndModify: false });\n        return `[success]: transaction approved ${req.value}`;\n    }\n    else {\n        const billAccount = yield model_2.model.findOne({ _id: ticket.bill_id });\n        const transactionResult = transactionPay(billAccount.value, req.value, 'credit');\n        yield model_2.model.findByIdAndUpdate(req.id, { $set: { value: transactionResult.result } }, { useFindAndModify: false });\n        yield model_1.model.updateOne(filter, { $set: { status: 'approved' } }, { useFindAndModify: false });\n        return `[success]: transaction rejected ${req.value}`;\n    }\n});\nexports.approvePay = approvePay;\nconst getHistoryPay = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    return model_1.model.find({ bill_id: id });\n});\nexports.getHistoryPay = getHistoryPay;\nconst getHistoryPayList = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    return model_2.model.find({ owner_id: id });\n});\nexports.getHistoryPayList = getHistoryPayList;\n\n\n//# sourceURL=webpack://my-notes-backend/./components/history-pay/store.ts?");

/***/ }),

/***/ "./components/profile/controller.ts":
/*!******************************************!*\
  !*** ./components/profile/controller.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.updateProfile = exports.createProfile = exports.getProfile = void 0;\nconst store_1 = __webpack_require__(/*! ./store */ \"./components/profile/store.ts\");\nfunction getProfile(id) {\n    return new Promise((resolve, reject) => {\n        if (id && id.length > 0) {\n            resolve((0, store_1.get)(id));\n        }\n        else {\n            reject(`id invalido: ${id}`);\n        }\n    });\n}\nexports.getProfile = getProfile;\nfunction createProfile(profile) {\n    return new Promise((resolve, reject) => {\n        if (profile) {\n            resolve((0, store_1.create)(profile));\n        }\n        else {\n            reject(`parametro invalido ${profile}`);\n        }\n    });\n}\nexports.createProfile = createProfile;\nfunction updateProfile(profile) {\n    return new Promise((resolve, reject) => {\n        if (profile) {\n            resolve((0, store_1.update)(profile));\n        }\n        else {\n            reject(`parametro invalido ${profile}`);\n        }\n    });\n}\nexports.updateProfile = updateProfile;\n\n\n//# sourceURL=webpack://my-notes-backend/./components/profile/controller.ts?");

/***/ }),

/***/ "./components/profile/model.ts":
/*!*************************************!*\
  !*** ./components/profile/model.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.model = void 0;\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst Schema = mongoose_1.default.Schema;\nconst profileSchema = new Schema({\n    user_id: String,\n    picture_url: String,\n    score: String,\n    phone: String,\n    email: String\n});\nexports.model = mongoose_1.default.model(\"profiles\", profileSchema);\n\n\n//# sourceURL=webpack://my-notes-backend/./components/profile/model.ts?");

/***/ }),

/***/ "./components/profile/network.ts":
/*!***************************************!*\
  !*** ./components/profile/network.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.router = void 0;\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst controller = __webpack_require__(/*! ./controller */ \"./components/profile/controller.ts\");\nexports.router = express_1.default.Router();\nexports.router.get(\"/profile\", (req, res) => {\n    controller.getProfile(req.query.id)\n        .then((profile) => res.send(profile))\n        .catch((e) => console.log(e));\n});\nexports.router.post(\"/create-profile\", (req, res) => {\n    controller.createProfile(req.body)\n        .then((profile) => res.send(profile))\n        .catch((e) => console.log(e));\n});\nexports.router.post(\"/update-profile\", (req, res) => {\n    controller.updateProfile(req.body)\n        .then((profile) => res.send(profile))\n        .catch((e) => console.log(e));\n});\n\n\n//# sourceURL=webpack://my-notes-backend/./components/profile/network.ts?");

/***/ }),

/***/ "./components/profile/store.ts":
/*!*************************************!*\
  !*** ./components/profile/store.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.update = exports.create = exports.get = void 0;\nconst model_1 = __webpack_require__(/*! ./model */ \"./components/profile/model.ts\");\nfunction get(id) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const filter = { user_id: id };\n        const profile = yield model_1.model.find(filter);\n        return profile ? profile[0] : [];\n    });\n}\nexports.get = get;\nfunction create(reqProfile) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const isExist = yield model_1.model.find({ user_id: reqProfile.user_id });\n        if (isExist) {\n            return (`the user has already profile: ${isExist.user_id}`);\n        }\n        const newProfile = {\n            user_id: reqProfile.user_id,\n            picture_url: reqProfile.picture_url,\n            score: reqProfile.score,\n            phone: reqProfile.phone,\n            email: reqProfile.email\n        };\n        const createProfile = new model_1.model(newProfile);\n        createProfile.save();\n        return createProfile;\n    });\n}\nexports.create = create;\nfunction update(reqData) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const id = { user_id: reqData._id };\n        const newProfile = {\n            user_id: reqData.user_id,\n            picture_url: reqData.picture_url,\n            score: reqData.score,\n            phone: reqData.phone,\n            email: reqData.email\n        };\n        model_1.model.updateOne(id, newProfile);\n        return newProfile;\n    });\n}\nexports.update = update;\n\n\n//# sourceURL=webpack://my-notes-backend/./components/profile/store.ts?");

/***/ }),

/***/ "./components/shop/controller.ts":
/*!***************************************!*\
  !*** ./components/shop/controller.ts ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst store_1 = __webpack_require__(/*! ./store */ \"./components/shop/store.ts\");\nfunction getProducts() {\n    return new Promise((resolve, reject) => {\n        resolve((0, store_1.getProductList)());\n    });\n}\nfunction addProduct(newProduct) {\n    return new Promise((resolve, reject) => {\n        resolve((0, store_1.addNewProduct)(newProduct));\n    });\n}\nfunction updateProduct(updateProduct) {\n    return new Promise((resolve, reject) => {\n        resolve((0, store_1.updateProductStore)(updateProduct));\n    });\n}\nmodule.exports = {\n    getProducts,\n    addProduct,\n    updateProduct\n};\n\n\n//# sourceURL=webpack://my-notes-backend/./components/shop/controller.ts?");

/***/ }),

/***/ "./components/shop/model.ts":
/*!**********************************!*\
  !*** ./components/shop/model.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Model = void 0;\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst Schema = mongoose_1.default.Schema;\nconst productSchema = new Schema({\n    title: String,\n    price: String,\n    description: String,\n    category: String,\n    image: String,\n    stock: String,\n    rating: Object\n});\nexports.Model = mongoose_1.default.model(\"producs\", productSchema);\n\n\n//# sourceURL=webpack://my-notes-backend/./components/shop/model.ts?");

/***/ }),

/***/ "./components/shop/network.ts":
/*!************************************!*\
  !*** ./components/shop/network.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.router = void 0;\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst controller = __webpack_require__(/*! ./controller */ \"./components/shop/controller.ts\");\nexports.router = express_1.default.Router();\nexports.router.get(\"/products\", (req, res) => {\n    controller.getProducts()\n        .then((productList) => {\n        res.send(productList);\n    })\n        .catch((e) => console.log(e));\n});\nexports.router.post(\"/create-product\", (req, res) => {\n    controller.addProduct(req.body)\n        .then((product) => {\n        res.send(product);\n    });\n});\nexports.router.put(\"/update-product\", (req, res) => {\n    controller.updateProduct(req.body)\n        .then((product) => {\n        res.send(product);\n    })\n        .catch((e) => console.log(e));\n});\n\n\n//# sourceURL=webpack://my-notes-backend/./components/shop/network.ts?");

/***/ }),

/***/ "./components/shop/store.ts":
/*!**********************************!*\
  !*** ./components/shop/store.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.updateProductStore = exports.addNewProduct = exports.getProductList = void 0;\nconst model_1 = __webpack_require__(/*! ./model */ \"./components/shop/model.ts\");\nfunction getProductList() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const products = yield model_1.Model.find();\n        return products;\n    });\n}\nexports.getProductList = getProductList;\nfunction addNewProduct(newProduct) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const newNote = new model_1.Model(newProduct);\n        newNote.save();\n        return newNote;\n    });\n}\nexports.addNewProduct = addNewProduct;\nfunction updateProductStore(product) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const id = { _id: product._id };\n        ///TODO:\n        return \"updating...\";\n    });\n}\nexports.updateProductStore = updateProductStore;\n\n\n//# sourceURL=webpack://my-notes-backend/./components/shop/store.ts?");

/***/ }),

/***/ "./middleware/auth.handler.ts":
/*!************************************!*\
  !*** ./middleware/auth.handler.ts ***!
  \************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst boom = __webpack_require__(/*! @hapi/boom */ \"@hapi/boom\");\nconst config = __webpack_require__(/*! ../config */ \"./config/index.js\");\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nfunction checkApiKey(req, res, next) {\n    const apiKey = req.headers['apikey'];\n    if (apiKey === config.apiKey) {\n        next();\n    }\n    else {\n        res.status(401);\n        res.send('sin autorizacion');\n    }\n}\nfunction signToken(payload, secret) {\n    return jwt.sign(payload, secret);\n}\nfunction checkRoles(...roles) {\n    return (req, res, next) => {\n        const user = req.user;\n        if (roles.includes(user.role)) {\n            next();\n        }\n        else {\n            res.status(403).json({\n                status: 403,\n                message: \"no permitido\"\n            });\n        }\n    };\n}\nmodule.exports = { checkApiKey, signToken, checkRoles };\n\n\n//# sourceURL=webpack://my-notes-backend/./middleware/auth.handler.ts?");

/***/ }),

/***/ "./utils/noteUtils.ts":
/*!****************************!*\
  !*** ./utils/noteUtils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.NoteUtils = void 0;\nclass NoteUtils {\n}\nexports.NoteUtils = NoteUtils;\nNoteUtils.testTypescritp = () => {\n    console.log('testing typescript');\n};\n\n\n//# sourceURL=webpack://my-notes-backend/./utils/noteUtils.ts?");

/***/ }),

/***/ "./utils/auth/index.js":
/*!*****************************!*\
  !*** ./utils/auth/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const passport = __webpack_require__(/*! passport */ \"passport\")\nconst JwtStrategy = __webpack_require__(/*! ./strategies/jwt.strategy */ \"./utils/auth/strategies/jwt.strategy.js\")\nconst LocalStrategy = __webpack_require__(/*! ./strategies/local.strategy */ \"./utils/auth/strategies/local.strategy.js\")\n\npassport.use(LocalStrategy)\npassport.use(JwtStrategy)\n\n//# sourceURL=webpack://my-notes-backend/./utils/auth/index.js?");

/***/ }),

/***/ "./utils/auth/strategies/jwt.strategy.js":
/*!***********************************************!*\
  !*** ./utils/auth/strategies/jwt.strategy.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Strategy, ExtractJwt } = __webpack_require__(/*! passport-jwt */ \"passport-jwt\")\nconst config = __webpack_require__(/*! ../../../config */ \"./config/index.js\")\n\nconst options = {\n    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),\n    secretOrKey: config.secret\n}\n\nconst JwtStrategy = new Strategy(options, (payload, done) => {\n    return done(null, payload)\n})\n\nmodule.exports = JwtStrategy\n\n//# sourceURL=webpack://my-notes-backend/./utils/auth/strategies/jwt.strategy.js?");

/***/ }),

/***/ "./utils/auth/strategies/local.strategy.js":
/*!*************************************************!*\
  !*** ./utils/auth/strategies/local.strategy.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Strategy } = __webpack_require__(/*! passport-local */ \"passport-local\")\nconst UserModel = __webpack_require__(/*! ../../../components/users/model */ \"./components/users/model.js\")\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\")\n\nconst LocalStrategy = new Strategy(async (user, pass, done) => {\n    try {\n        const dbUser = await UserModel.findOne({ username: user })\n        if(!user) {\n            done('no sirvio user', false) \n        }\n\n        const isMatch = await bcrypt.compare(pass, dbUser.password)\n        if (!isMatch) {\n            done('sin autorizar contraseña', false)\n        }\n        done(null, user)\n    } catch (error) {\n        done(error, false)\n    }\n})\n\nmodule.exports = LocalStrategy\n\n//# sourceURL=webpack://my-notes-backend/./utils/auth/strategies/local.strategy.js?");

/***/ }),

/***/ "@hapi/boom":
/*!*****************************!*\
  !*** external "@hapi/boom" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@hapi/boom");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("passport");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("passport-local");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataById = exports.getData = void 0;
const items_1 = require("../services/items");
/**
 * CHALLENGE API
 * @url /api/items?q=:query
 * @param req query q=:query -> lo que se va a buscar
 * @param res
 * @returns query -> palabra/parametro de busqueda & resultado
 * @errors case 1: Si la API externa no responde o si existe un bug interno
 */
const getData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { query: { q }, } = req;
    if (!q) {
        return res.status(404).json({
            query: "",
            message: "No se recibió parametros para hacer la búsqueda",
        });
    }
    const items = yield (0, items_1.getAllData)();
    let results;
    if (items.length > 0) {
        const query = String(q).toLocaleLowerCase();
        results = items.filter((item) => item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.category.name.toLocaleLowerCase().includes(query));
        return res.status(200).json({ query: q, results });
    }
    else {
        return res
            .status(400)
            .json({ query: q, message: "Error API EXTERNA o interno" });
    }
});
exports.getData = getData;
/**
 * CHALLENGE API
 * @url /api/items/:id
 * @param req param :id -> lo que se va a buscar
 * @param res
 * @returns detalle de item
 */
const getDataById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { params: { id }, } = req;
    if (!id) {
        return res.status(404).json({
            query: "",
            message: "No se recibió id para hacer la búsqueda detallada",
        });
    }
    const item = yield (0, items_1.getResultById)(+id);
    if (item) {
        return res.status(200).json({ data: item });
    }
    else {
        return res
            .status(400)
            .json({ data: null, message: "Error API EXTERNA o interno" });
    }
});
exports.getDataById = getDataById;

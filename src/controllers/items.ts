import { Request, Response } from "express";
import { getAllData } from "../services/items";
import { Item } from "../types";

/**
 * CHALLENGE API
 * @url /api/items?q=:query
 * @param req query q=:query -> lo que se va a buscar
 * @param res
 * @returns query -> palabra/parametro de busqueda & resultado
 * @errors case 1: Si la API externa no responde o si existe un bug interno
 */
export const getData = async (req: Request, res: Response) => {
  const {
    query: { q },
  } = req;

  if (!q)
    return res.status(404).json({
      query: "",
      message: "No se recibió parametros para hacer la búsqueda",
    });

  const items = await getAllData();
  let results: Item[] | [];

  if (items.length > 0) {
    const query = String(q).toLocaleLowerCase();
    results = items.filter(
      (item: Item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.name.toLocaleLowerCase().includes(query)
    );
    return res.status(200).json({ query: q, results });
    // Si el resultado de la busqueda desde API debe tener un limite de 4
    // return res.status(200).json({ query: q, results: results.slice(0, 4) });
  } else {
    return res
      .status(400)
      .json({ query: q, message: "Error API EXTERNA o interno" });
  }
};

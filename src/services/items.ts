import axios from "axios";
import * as dotenv from "dotenv";
import { Item } from "../types";
dotenv.config();

// Se obtiene la URL de API EXTERNA desde la variable de entorno, si existe
const API = process.env.URI_API_EXTERNA || undefined;

/**
 * Obtenemos la data desde la API externa
 * @returns Item[] || []
 */
export const getAllData = async (): Promise<Item[] | []> => {
  if (API) {
    const data = await axios(API);

    return data.data;
  } else return [];
};

export const getResultById = async (id: number): Promise<Item | null> => {
  try {
    const data = await axios(`${API}/${id}`);
    return data.data;
  } catch (_error) {
    return null;
  }
};

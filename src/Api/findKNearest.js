import { toPointString } from "../utils";
import { get } from "./api";

const url = "http://127.0.0.1:8010/v1/vehicles/dynamic/findKNearest";

export const findKNearestVehicles = async (position, count) => {
  const data = await get(`${url}?${toPointString(position)}&k=${count}`);
  return data;
};

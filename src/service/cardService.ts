import { CardResponse } from "../models.ts";
import { IRestService } from "./restService.ts";

export interface ICardService {
  getCards(): Promise<CardResponse[] | null>;
}

export class CardService implements ICardService {
  constructor(private readonly restService: IRestService) {}

  async getCards(): Promise<CardResponse[] | null> {
    try {
      const url = "/posts";
      return await this.restService.get<CardResponse[] | null>(url);
    } catch (error) {
      console.error(`Unable to get data: ${error}`);
    }
    return null;
  }
}

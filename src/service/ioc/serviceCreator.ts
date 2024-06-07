import { IInjectedServices } from "./injectedServices";
import { RestService } from "../restService";
import { CardService } from "../cardService";

export const createServices = (): IInjectedServices => {
  const webApiRestService = new RestService(
    "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api"
  );
  const cardService = new CardService(webApiRestService);

  return {
    cardService,
  };
};

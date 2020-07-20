import { environment } from '../../environments/environment';

export class GlobalDefinitions {
  public static serviceHostUrl: string = environment.apiRoot;
  public static baseHref: string = '/api/v1/';

  //******** ROOT API URLS ********//
  public static login = GlobalDefinitions.serviceHostUrl + GlobalDefinitions.baseHref + 'user/login';

  public static userData = GlobalDefinitions.serviceHostUrl + GlobalDefinitions.baseHref + 'user/data';

  //******** ROOT API URLS END ********//
}
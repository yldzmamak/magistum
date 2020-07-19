import { environment } from '../../environments/environment';

export class GlobalDefinitions {
  public static serviceHostUrl: string = environment.apiRoot;
  public static baseHref: string = '/api/v1';

  //******** ERROR MESSAGES ********//
  public static messageError = 'Beklenmeyen hata ile karşılaşıldı. Lütfen daha sonra tekrar deneyiniz';

  //******** ROOT API URLS ********//
  public static login = GlobalDefinitions.serviceHostUrl + GlobalDefinitions.baseHref + '/user/login';

  //******** ROOT API URLS END ********//
}
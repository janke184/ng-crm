import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  static LS_TOKEN = 'userTokenId';

  constructor() { }

  deleteToken(): void {
    // localStorage.removeItem(SessionService.LS_TOKEN);
	this.deleteCookie(SessionService.LS_TOKEN);
  }

  setToken(token: string): void {
    // this.setLocalStorage(SessionService.LS_TOKEN, token);
	this.setCookie(SessionService.LS_TOKEN, token);
  }

  getToken(): string {
    // return this.getLocalStorage(SessionService.LS_TOKEN);
	return this.getCookie(SessionService.LS_TOKEN);
  }

  private setLocalStorage(name: string, myobject: any): void {
    localStorage.setItem(name, JSON.stringify(myobject));
  }

  private getLocalStorage(name: string): any {
    let ls = localStorage.getItem(name);
    return ls ? JSON.parse(ls) : {};
  }

  
  private getCookie(name: string) {
      let ca: Array<string> = document.cookie.split(';');
      let caLen: number = ca.length;
      let cookieName = `${name}=`;
      let c: string;

      for (let i: number = 0; i < caLen; i += 1) {
          c = ca[i].replace(/^\s+/g, '');
          if (c.indexOf(cookieName) == 0) {
              return c.substring(cookieName.length, c.length);
          }
      }
      return '';
  }

  private deleteCookie(name: string) {
      this.setCookie(name, '', -1);
  }

  private setCookie(name: string, value: string, expireDays: number = 7, path: string = '') {
      let d:Date = new Date();
      d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
      let expires:string = `expires=${d.toUTCString()}`;
      let cpath:string = path ? `; path=${path}` : '';
      document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }

}

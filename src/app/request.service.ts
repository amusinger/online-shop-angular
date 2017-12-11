import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class RequestService {

  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  
  private productsUrl = '/api/products/view/all';
  private viewItemUrl = '/api/products/view/';
  private searchItemUrl = '/api/products/search/';
  private helperUrl = '/assets/helper.json';

  private categoryUrl = '/api/categories/view/all';
  private viewItemInCategoryUrl = '/api/categories/view/';
  private categoryNameUrl ='/api/categories/view/cat/';

  private onlineUrl = 'api/profile/online';
  private loginUrl = 'api/profile/login/';
  private logoutUrl = 'api/profile/logout/';
  private registerUrl = 'api/profile/register/';

  private addCartUrl = 'api/carts/add/';
  private removeCartUrl = 'api/carts/delete/';
  private viewCartUrl = 'api/carts/checkout/';
  private countCartUrl = 'api/carts/count/'

  private buyItemUrl = 'api/orders/buy/';
  private viewOrdersUrl = 'api/orders/view/all';


  
  public load(): Promise<any> {
    return this.http.get(this.helperUrl).toPromise().then(response => response.json() as any[])
  }

  public getProducts<T>(): Promise<any[]>{
    return this.http.get(this.productsUrl)
    .toPromise().then(response => response.json() as any[])
  }

  public searchProducts<T>(word: string): Promise<any[]>{
    return this.http.get(this.searchItemUrl + word)
    .toPromise().then(response => response.json() as any[])
  }



  public getCategories<T>(): Promise<any[]>{
    return this.http.get(this.categoryUrl)
    .toPromise().then(response => response.json() as any[])
  }

  public getCategoryName<T>(id:string): Promise<any[]>{
    return this.http.get(this.categoryNameUrl + id)
    .toPromise().then(response => response.json() as any[])
  }

  public getProductsInCategory<T>(id:string): Promise<any[]>{
    return this.http.get(this.viewItemInCategoryUrl + id)
    .toPromise().then(response => response.json() as any[])
  }

  public ViewItem<T>(id:string): Promise<any[]>{
    return this.http.get(this.viewItemUrl + id)
    .toPromise().then(response => response.json() as any[])
    // return this.http.get<T>(this.viewItemUrl + id);
  }


  public LoginUser<T>(email: String, pass: string): Promise<any[]>{
console.log(pass)
    let params = new HttpParams();
    params = params.append('password', pass);
    var x: string = this.loginUrl + email+ '/password/'  + pass;
    return this.http.get(x).toPromise().then(response => response.json() as any[])
    
    // this.http.get(this.loginUrl+email, requestOptions)
    //     .toPromise()
    //     .then(response => response.json())

    // console.log(this.loginUrl + email + pass);
    // return this.http.get(this.loginUrl + email)
    // .toPromise().then(response => response.json() as any[])
  }

  public isOnline<T>(): Promise<any[]>{
    return this.http.get(this.onlineUrl)
    .toPromise().then(response => response.json() as any[])
  }

  public LogoutUser<T>(email): Promise<any[]>{
    return this.http.get(this.logoutUrl + email)
    .toPromise().then(response => response.json() as any[])
  }

  public RegisterUser<T>(email: String, pass: String): Promise<any[]>{
    return this.http.get(this.registerUrl + email + '/password/' + pass)
    .toPromise().then(response => response.json() as any[])
  }

  public AddToCart<T>(id: String): Promise<any[]>{
    return this.http.get(this.addCartUrl + id)
    .toPromise().then(response => response.json() as any[])
  }

  public RemoveFromCart<T>(id: String){
    this.http.get(this.removeCartUrl + id)
    .toPromise().then(response => response.json() as any[])
  }

  public ViewCart<T>(): Promise<any[]>{
    console.log(this.viewCartUrl);
    return this.http.get(this.viewCartUrl)
    .toPromise().then(response => response.json() as any[]);
  }

  public CountCart<T>(): Promise<any[]>{
    return this.http.get(this.countCartUrl)
    .toPromise().then(response => response.json() as any[]);
  }

  public BuyItem<T>(id: String, address: String): Promise<any[]>{
    return this.http.get(this.buyItemUrl + id + '/address/' + address)
    .toPromise().then(response => response.json() as any[])
  }


  public ViewOrders<T>(): Promise<any[]>{
    return this.http.get(this.viewOrdersUrl )
    .toPromise().then(response => response.json() as any[])
  }

}

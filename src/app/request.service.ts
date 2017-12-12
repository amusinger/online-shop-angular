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
  private filterProdsUrl = '/api/products/filter/';

  private categoryUrl = '/api/categories/view/all';
  private viewItemInCategoryUrl = '/api/categories/view/';
  private categoryNameUrl ='/api/categories/view/cat/';

  private onlineUrl = 'api/profile/get/';
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

  public filterProducts(min: string, max:string): Promise<any[]>{
    return this.http.get(this.filterProdsUrl + min + '/max/'+ max)
    .toPromise().then(response => response.json() as any[]);
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

  public isOnline<T>(id: string): Promise<any[]>{
    return this.http.get(this.onlineUrl + id)
    .toPromise().then(response => response.json() as any[])
  }

  public LogoutUser<T>(email): Promise<any[]>{
    localStorage.removeItem("userID");
    return this.http.get(this.logoutUrl + email)
    .toPromise().then(response => response.json() as any[])
  }

  public RegisterUser<T>(email: String, pass: String): Promise<any[]>{
    return this.http.get(this.registerUrl + email + '/password/' + pass)
    .toPromise().then(response => response.json() as any[])
  }

  public AddToCart<T>(id: String): Promise<any[]>{
    var userID = localStorage.getItem("userID");
    var url = this.addCartUrl + id + '/user/' + userID;
    return this.http.get(url).toPromise().then(response => response.json() as any[])
  }

  public RemoveFromCart<T>(id: String){
    var userID = localStorage.getItem("userID");
    var url = this.removeCartUrl + id + '/user/' + userID;
    this.http.get(url)
    .toPromise().then(response => response.json() as any[])
  }

  public ViewCart<T>(): Promise<any[]>{
    var userID = localStorage.getItem("userID");
    console.log(this.viewCartUrl + userID);
    return this.http.get(this.viewCartUrl + userID)
    .toPromise().then(response => response.json() as any[]);
  }

  // public CountCart<T>(): number{
  //   var userID = localStorage.getItem("userID");
  //   console.log("IDDDD", userID);
  //   if(Number(userID) > 0){
  //     this.http.get(this.countCartUrl + userID)
  //     .toPromise().then(response => {
  //       var x = response.json() as any;
  //       return x as number;
  //     });
  //   } else{
  //     return 0;
  //   }
  // }

  public CountCart(): Observable<any>{
    var userID = localStorage.getItem("userID");
    return this.http.get(this.countCartUrl + userID);
  }

  public BuyItem<T>(id: String, address: String): Promise<any[]>{
    var userID = localStorage.getItem("userID");
    var cnt = (Number(localStorage.getItem("count")) - 1) || 0;
    localStorage.setItem("count", String(cnt));
    return this.http.get(this.buyItemUrl + id + '/address/' + address +'/user/' + userID)
    .toPromise().then(response => response.json() as any[])
  }


  public ViewOrders<T>(): Promise<any[]>{
    var userID = localStorage.getItem("userID");
    return this.http.get(this.viewOrdersUrl  +'/'+ userID)
    .toPromise().then(response => response.json() as any[])
  }

}

import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  filter,
  map,
  Observable,
  Observer,
  ReplaySubject,
  Subject,
  Subscription,
} from 'rxjs';

interface User {
  firstName: string;
  lastNAme: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'lesObservables';

  user: BehaviorSubject<User> = new BehaviorSubject(null);

  ngOnInit(): void {
    // const observable = new Observable ((observer : Observer<any>)=>{
    //   const data = 2;
    //   observer.next(data)
    //   observer.next(3)
    //   observer.next(4)
    //   setTimeout(() => {observer.next(5)}, 3000);
    //   observer.complete()
    // })
    // //console.log(observable);
    // const observer = {
    //   next : (a: any) => console.log("[next] : ",a),
    //   complete : () => console.log('[completed]'),
    //   error : (a:any) => console.log("[Error]", a)
    // }
    // observable.subscribe(observer)
    // const subject = new Subject()
    // subject.subscribe(valeur => console.log('Observer 1 : '+ valeur))
    // subject.subscribe(valeur => console.log('Observer 2 : '+ valeur))
    // subject.next(1);
    // subject.next('Gaddour')
    // const subject = new Subject<number>()
    // const subject1 = subject.subscribe((x)=> {
    //   console.log('[Subject 1 ] : ',x)
    // })
    // const subject2 = subject.subscribe((x)=> {
    //   console.log('[Subject 2 ] : ',x)
    // })
    // subject.next(33)
    // subject1.unsubscribe()
    // subject.next(55)
    // const subject = new BehaviorSubject<number>(0)
    // const subject1 = subject.subscribe((x)=> {
    //   console.log('[Subject 1 ] : ',x)
    // })
    // const subject2 = subject.subscribe((x)=> {
    //   console.log('[Subject 2 ] : ',x)
    // })
    // subject.next(33)
    // const test = new ReplaySubject(10)
    // console.log(test);

    //les pipes
    //http
    this.user.next({
      firstName: 'Gaddour',
      lastNAme: 'Hamza',
    });

    // On peut utiliser plusieur map sur un Observable
    const subject1 = this.user
      .pipe(
        filter((user:User)=> true),
        map((user: User) => {
          return `${user.firstName} ${user.lastNAme}`;
        })
      )
      .subscribe((fullName: string) => console.log(fullName));
  }
}

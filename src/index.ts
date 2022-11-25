import { Observable, of, from, fromEvent, timer, interval } from 'rxjs';
import { ajax, AjaxResponse } from "rxjs/ajax";
import {
    name$,
    storeDataOnServer,
    storeDataOnServerError
} from './external';

console.log('App started');

const interval1$ = interval(2000);

const subscription1 = interval1$.subscribe({
    next(value) {
        console.log(value);
    },
    error(err) {
        console.log(err);
    },
    complete() {
        console.log('completed');
    },
});

setTimeout(() => {
    const subscription2 = interval1$.subscribe({
        next(value) {
            console.log('second: ', value);
        },
        error(err) {
            console.log(err);
        },
        complete() {
            console.log('completed');
        },
    });
}, 4000);

setTimeout(() => {
    console.log('subscription1 ends');
    subscription1.unsubscribe();
}, 8000);

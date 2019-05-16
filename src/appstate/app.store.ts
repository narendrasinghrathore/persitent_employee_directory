import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { distinctUntilChanged } from 'rxjs/operators';
import { pluck } from 'rxjs/operators';
import { Employee } from '../models/employee';
import { AppStoreEnum } from '../models/app.enum';

export interface State {
    [AppStoreEnum.employees]: Employee[];
    [key: string]: any;
}

const state: State = {
    [AppStoreEnum.employees]: undefined,
};

export class Store {
    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable()
        .pipe(
            distinctUntilChanged()
        );

    get value() {
        return this.subject.value;
    }

    select<T>(name: AppStoreEnum): Observable<T> {
        return this.store
            .pipe(
                pluck(name)
            );
    }

    set(name: AppStoreEnum, state_: any) {
        this.subject.next({ ...this.value, [name]: state_ });
    }
}

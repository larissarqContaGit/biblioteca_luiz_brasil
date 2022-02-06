import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
    providedIn: 'root'
})

export class SecaoService {

    secaoColecao: AngularFirestoreCollection<any>;

    array = [];
    
    constructor(private firebase: AngularFirestore){


    }
}
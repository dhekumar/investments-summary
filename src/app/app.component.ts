import {
  Component,
  OnInit,
} from '@angular/core';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import firebaseConfig from '../constants/firebaseConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    const  app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
  }
}


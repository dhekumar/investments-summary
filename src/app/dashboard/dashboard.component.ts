import { NgIf } from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports:[NgIf]
})
export class DashboardComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router){
  }

  ngOnInit(): void {
  }
}

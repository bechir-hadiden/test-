import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Dossier } from '../model/Dossier';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent  implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
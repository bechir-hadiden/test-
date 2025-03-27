import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrl: './up.component.css'
})
export class UpComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}

import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { DialogModule } from 'primeng/dialog';
import { AppService } from '../Services/app.service';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrl: './up.component.css'
})
export class UpComponent {
  @ViewChild(TestComponent) test1Component!: TestComponent;


}

import { Component } from '@angular/core';
import { LoaderService } from '../../../core/services/loader/loader.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  constructor(public loader: LoaderService) {}
}

import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  @Input() customTemplate!: TemplateRef<HTMLElement>;
}

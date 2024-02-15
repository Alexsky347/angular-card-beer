import { HeaderComponent } from '../header/header.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { InputSearchComponent } from '../input-search/input-search.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, PaginationComponent, InputSearchComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  // constructor(private _ViewContainerRef: ViewContainerRef) {}
  // @ViewChild('editor') editor!: ElementRef<HTMLElement>;
  // public appendComponent() {
  //   const component: ComponentRef<BeersListComponent> =
  //     this._ViewContainerRef.createComponent(BeersListComponent);
  //   const element: HTMLElement = component.location.nativeElement;
  //   element.contentEditable = 'false';
  //   this.editor.nativeElement.appendChild(element);
  // }
}

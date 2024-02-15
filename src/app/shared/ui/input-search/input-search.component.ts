import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss'
})
export class InputSearchComponent implements OnInit, OnDestroy {
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();
  private searchInputSubject: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.searchInputSubject.pipe(debounceTime(500)).subscribe((newValue) => {
      this.searchChange.emit(newValue);
    });
  }
  ngOnDestroy(): void {
    this.searchInputSubject.unsubscribe();
  }

  onInputSearchChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.searchInputSubject.next(newValue);
  }
}

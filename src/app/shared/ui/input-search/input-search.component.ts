import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss'
})
export class InputSearchComponent implements OnInit {
  search = new FormControl('', { nonNullable: true });
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((newValue) => {
        this.searchChange.emit(newValue);
      });
  }
}

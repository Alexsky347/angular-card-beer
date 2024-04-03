import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { output } from '@angular/core';

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
  searchChange = output<string>();

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((newValue) => {
        this.searchChange.emit(newValue);
      });
  }
}

import { Component,Input } from '@angular/core';
import { NOTES } from '../model/noteList';
import { Notes } from '../model/notes';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
    @Input() note= NOTES;
  // onSearch(searchTerm: string) {
  //   this.note = this.note.filter(notes => notes.title?.toLowerCase().includes(searchTerm.toLowerCase()));
  // }
}

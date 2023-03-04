import { Component } from '@angular/core';
import { Notes } from '../model/notes';
import { NOTES } from '../model/noteList';
@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent {
  notes: Notes[] = NOTES;
  filteredNotes: Notes[] = [];
  displayNotes: Notes[] = this.notes;

  search(query: any) {
    this.filteredNotes = this.notes.filter(note => {
      return note.title?.toLowerCase().includes(query.toLowerCase()) ||
             note.content?.toLowerCase().includes(query.toLowerCase());
    });
  }

  addNote(newNote: any) {
    this.notes.push(newNote);
  }
}

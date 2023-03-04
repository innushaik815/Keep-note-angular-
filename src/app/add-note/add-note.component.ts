import { Component } from '@angular/core';
import { Notes } from '../model/notes';
import { NOTES } from '../model/noteList';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  noteId: number|any;
  noteTitle: string|any;
  noteContent: string|any;

  saveNote() {
    const newNote: Notes = {
      id: this.noteId,
      title: this.noteTitle,
      content: this.noteContent
    };
    NOTES.push(newNote);
    this.noteId = null;
    this.noteTitle = '';
    this.noteContent = '';
  }

}

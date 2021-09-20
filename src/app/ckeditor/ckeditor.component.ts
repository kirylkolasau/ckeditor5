import { Component } from '@angular/core';
//import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import Editor from './ckeditor5/build/ckeditor.js';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss']
})
export class CkeditorComponent {
  public CKEditor = Editor;

  public config = {
    //plugins: [ SourceEditing],
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        '|',
        'sourceEditing',
        'insertImage'
      ]
    },
    // heading: {
    //   options: [
    //     { model: 'paragraph', title: 'paragraph', class: 'ck-heading_paragraph' },
    //     { model: 'heading2', view: 'h2', title: 'heading2', class: 'ck-heading_heading2' },
    //     { model: 'heading3', view: 'h3', title: 'heading3', class: 'ck-heading_heading3' }
    //   ]
    // },
   // toolbar: [ 'sourceEditing', 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
    // heading: {
    //     options: [
    //         { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
    //         { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
    //         { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
    //     ]
    // },
    // plugins: [ SourceEditing ],
    // toolbar: {
    //   items: [
    //     'sourceEditing'
    //   ]
    // },
    // This value must be kept in sync with the language defined in webpack.config.js.
    language: 'en'

    // items: [
    //     'heading', '|',
    //     'fontfamily', 'fontsize', '|',
    //     'alignment', '|',
    //     'fontColor', 'fontBackgroundColor', '|',
    //     'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
    //     'link', '|',
    //     'outdent', 'indent', '|',
    //     'bulletedList', 'numberedList', 'todoList', '|',
    //     'code', 'codeBlock', '|',
    //     'insertTable', '|',
    //     'uploadImage', 'blockQuote', '|',
    //     'undo', 'redo'
    // ],
    // shouldNotGroupWhenFull: true

  };
}

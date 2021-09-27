import { Component } from '@angular/core';
//import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import Mention from '@ckeditor/ckeditor5-mention/src/mention.js';

import Editor from './ckeditor5/build/ckeditor.js';
@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss']
})
export class CkeditorComponent {
  public CKEditor = Editor;
  editor: any;
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
        '|',
        'setting',
        'simpleBox'
      ],

    },
    mention: {
      feeds: [
        {
          marker: '$',
          feed: this.getFeedItems
        }
      ]
    },
    // heading: {
    //   options: [
    //     { model: 'paragraph', title: 'paragraph', class: 'ck-heading_paragraph' },
    //     { model: 'heading2', view: 'h2', title: 'heading2', class: 'ck-heading_heading2' },
    //     { model: 'heading3', view: 'h3', title: 'heading3', class: 'ck-heading_heading3' }
    //   ]
    // },

    language: 'en'

  };



  public getFeedItems(queryText) {
    const items = ["$Model","$ComputerName","$FirstName","$Username"
      // { id: '{$Model}', userId: '1', name: '{$user}' },
      // { id: '{$ComputerName}', userId: '2', name: '{$project}' },
      // { id: '{$FirstName}', userId: '3', name: '{$object}' },
      // { id: '{$Username}', userId: '4', name: '{$slot}' }
    ];

    return new Promise(resolve => {
      setTimeout(() => {
        const itemsToDisplay = items
          .filter(isItemMatching)
          .slice(0, 10);
        resolve(itemsToDisplay);
      }, 100);
    });


    function isItemMatching(item) {
      const searchString = queryText.toLowerCase();
      return (
        item.toLowerCase().includes(searchString)
        // item.name.toLowerCase().includes(searchString) ||
        // item.id.toLowerCase().includes(searchString)
      );
    }
  }

  onReady(editor): void {
    this.editor = editor;
    console.log("onReady", this.editor);
  }

  onSave() {
    this.editor.model.change( writer => {
      this.editor.model.insertContent( writer.createText( 'x' ) );
    });
  }
}

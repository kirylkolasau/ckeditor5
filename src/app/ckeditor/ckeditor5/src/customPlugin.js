import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import DropdownButton from '@ckeditor/ckeditor5-ui/src/dropdown/dropdownpanelview';


export default class InsertImage extends Plugin {
  init() {
    const editor = this.editor;
    console.log(editor);
    editor.ui.componentFactory.add('insertImage', locale => {
      const view = new ButtonView(locale);

      view.set({
        label: 'Insert image',
        icon: imageIcon,
        tooltip: true
      });
      view.on('execute', () => {
        alert("test");
      });

      return view;
    });
    editor.ui.componentFactory.add('customDDL', locale => {
      const dropdown = createDropdown( locale );
      dropdown.buttonView.set( {
        label: 'A dropdown',
        withText: true
      } );
      dropdown.buttonView.set( {
        label: 'A dropdown',
        withText: true
      } );

      dropdown.render();

      dropdown.panelView.element.textContent = 'Content of the panel';

      // Will render a dropdown with a panel containing a "Content of the panel" text.
      document.body.appendChild( dropdown.element );
    });
  }
}

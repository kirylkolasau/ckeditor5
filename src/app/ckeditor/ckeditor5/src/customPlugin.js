import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import cogIcon from '@ckeditor/ckeditor5-core/theme/icons/cog.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import { createDropdown } from '@ckeditor/ckeditor5-ui/src/dropdown/utils';
import SplitButtonView from '@ckeditor/ckeditor5-ui/src/dropdown/button/splitbuttonview';
import SampleView from "./custom.view.js";


export default class SettingAlert extends Plugin {
  init() {

    const editor = this.editor;
    console.log("init", editor);

    editor.ui.componentFactory.add('setting', locale => {
      const view = new ButtonView(locale);
      view.class = "custom_test";
      console.log(view);
      view.set({
        label: 'Setting',
        icon: cogIcon,
        tooltip: true
      });

      view.on('execute', () => {
        alert("Info for setting");
        /**
         * We can add some logic here
         */
      });

      return view;
    });

    // editor.ui.componentFactory.add('setting', locale => {
    //   const view = new SampleView(locale);
    //   view.render();
    //   document.body.appendChild(view.element);
    //   view.elementClass = 'baz';
    //   view.on('clicked', () => {
    //     console.log('The view has been clicked!');
    //   });
    //   return view;
    // });

  }
}

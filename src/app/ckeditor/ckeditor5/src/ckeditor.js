import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting.js';
import Mention from '@ckeditor/ckeditor5-mention/src/mention.js';
import SettingAlert from './customPlugin.js';
import SimpleBox from './simpleBoxPlagin.js';


class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Bold,
	Essentials,
	Heading,
	Italic,
	Link,
	Paragraph,
	SourceEditing,
	Mention,
	SettingAlert,
	SimpleBox
];

// Editor.defaultConfig = {
//     toolbar: {
//         items: [
//             'heading',
//             '|',
//             'bold',
//             'italic',
//             'link'

//         ]
//     },
//     // This value must be kept in sync with the language defined in webpack.config.js.
//     language: 'en'
// };


export default Editor;

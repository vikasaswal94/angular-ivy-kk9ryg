/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder.js';
import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter.js';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Font from '@ckeditor/ckeditor5-font/src/font';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
/** https://github.com/rhysstubbs/ckeditor5-add-attribute-to-element */
import ElementAddAttributes from './src/add-attribute-to-element';
class DocumentId extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'documentId', () => {
			// The button will be an instance of ButtonView.
			const button = new ButtonView();

			button.set( {
				label: 'ID',
				withText: true
			} );

			//Execute a callback function when the button is clicked
			button.on( 'execute', () => {
				const now = new Date();

				//Change the model using the model writer
				editor.model.change( writer => {
					console.log('writer', writer, editor.model,
					editor.model.document,
					editor.model.document.getRoot(),
					editor.model.document.selection,
					editor.model.schema);
					//Insert the text at the user's current position
					editor.model.insertContent( writer.createText( now.toString() ) );
				} );
			} );

			return button;
		} );
	}
}

class Editor extends ClassicEditor { }

// Plugins to include in the build.
Editor.builtinPlugins = [
	Alignment,
	Autoformat,
	BlockQuote,
	Bold,
	CKFinder,
	CKFinderUploadAdapter,
	Code,
	CodeBlock,
	Essentials,
	Font,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	Heading,
	Highlight,
	HorizontalLine,
	HtmlEmbed,
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Italic,
	Link,
	List,
	MediaEmbed,
	PageBreak,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	SpecialCharacters,
	SpecialCharactersCurrency,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Subscript,
	Superscript,
	Table,
	TableCellProperties,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Underline,
	WordCount,
	LinkImage,
	ElementAddAttributes
];

Editor.defaultConfig = {
	elementAddAttributes: {
        enabled: true, // false will disable the button on the UI
    },
	link: {
		addTargetToExternalLinks: true
		// defaultProtocol: 'http://',
		/*decorators: {
			addTargetToExternalLinks: {
				mode: 'automatic',
				callback: url => /zeezest.com/.test( url ),
				attributes: {
					target: '_blank',
					rel: 'noopener noreferrer'
				}
			}
		}*/
	},
	heading: {
		options: [
			{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
			{ model: 'heading1', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading1' },
			{ model: 'heading2', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading2' },
			{ model: 'heading3', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading3' }
		]
	},
	fontSize: {
		options: [
			9,
			11,
			13,
			'default',
			18,
			19,
			21
		]
	},
	/*mediaEmbed: {
		providers: [
			{
				// A URL regexp or an array of URL regexps:
				url: /^instagram\.com\/p\//,

				// To be defined only if the media are previewable:
				html: match => {
					return (
							`<iframe src="https://api.instagram.com/oembed/?url=${url}&hidecaption=0&maxwidth=540" ` +
								'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
								'frameborder="0" width="480" height="270" allowfullscreen allow="autoplay">' +
							'</iframe>' 
					);
				}
			},
		]
	},*/
	image: {
		// Configure the available styles.
		styles: [
			'alignLeft', 'alignCenter', 'alignRight'
		],

		// Configure the available image resize options.
		resizeOptions: [
			{
				name: 'imageResize:original',
				label: 'Original',
				value: null
			},
			{
				name: 'imageResize:50',
				label: '50%',
				value: '50'
			},
			{
				name: 'imageResize:75',
				label: '75%',
				value: '75'
			}
		],

		// You need to configure the image toolbar, too, so it shows the new style
		// buttons as well as the resize buttons.
		toolbar: [
			'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
			'|',
			'imageResize',
			'|',
			'imageTextAlternative',
			'linkImage'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn', 'tableRow', 'mergeTableCells',
			'tableProperties', 'tableCellProperties'
		]
	},
	toolbar: ['heading',
		'|', 'bold', 'italic', 'link', 'numberedList', 'bulletedList',
		'|', 'indent', 'outdent',
		'|', 'imageUpload', 'blockQuote', 'insertTable', 'mediaEmbed',
		'|', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
		'|', 'elementAddAttributes', 'htmlEmbed', 'undo', 'redo'],

	/*toolbar: ['heading',
		'|', 'bold', 'italic', 'indent', 'outdent', 'alignment', 'blockQuote',
		'|', 'removeHighlight', "highlight", "horizontalLine", "removeFormat",
		'|', 'imageUpload',
		// '|', 'imageResize', '|', 'imageTextAlternative',
		'|', "specialCharacters", "strikethrough", "subscript", "superscript", "underline",
		// '|', "tableColumn", "tableRow", "mergeTableCells", "tableCellProperties", "tableProperties",
		// '|', 'code', 'codeBlock', 'selectAll', 'horizontalLine', 'htmlEmbed',
		'|', 'numberedList', 'bulletedList',
		'|', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
		// '|', 'ckfinder',
		'|', 'undo', 'redo'],*/
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

export default Editor;

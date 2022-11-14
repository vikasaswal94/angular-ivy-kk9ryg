/**
 * https://stackoverflow.com/questions/44671182/ckeditor-widget-double-click-to-open-dialog-does-not-work
 * https://github.com/ckeditor/ckeditor4/blob/1aa21195bda3e4cfb4f19fa70d5a285b56965d70/plugins/dialog/dialogDefinition.js#L976-L977
 * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dialog_definition_button.html#property-setup
 * https://stackoverflow.com/questions/13594705/ckeditor-plugin-validating-a-text-field
 * https://ckeditor.com/docs/ckeditor4/latest/guide/plugin_sdk_sample_2.html 
 * https://stackoverflow.com/questions/19299204/ckeditor-image-dialog-size 
 * */
CKEDITOR.plugins.add('videoembed', {
    icons: 'videoembed',
    init: function (editor) {
        editor.addCommand('videoembed', new CKEDITOR.dialogCommand('videoembedDialog'));
        editor.ui.addButton('videoembed', {
            label: 'Insert Video',
            command: 'videoembed',
            toolbar: 'insert'
        });

        CKEDITOR.dialog.add('videoembedDialog', this.path + 'dialogs/videoembed.js');
    }
});
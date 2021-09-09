/**
 * This module depends on [SimpleMDE](https://www.npmjs.com/package/simplemde) and [Font Awesome](https://www.npmjs.com/package/font-awesome).
 *
 * There are still two known limitations which are not resolved.
 * One is the color and background color of the container element is not well respected, and the other is the fullscreen mode only works well for the last qia-markdown-text element.
 *
 * @module Qia.MarkDownText
 */
declare class QiaMarkDownText {
    private containerElement;
    private propsObject;
    private state;
    private markdownTextBoxElement;
    private markdownTextAreaElement;
    private markdownEditor;
    constructor(containerElement: HTMLElement, optionsObject?: {});
    getText(): any;
    setText(text: string): void;
    setEditMode(editMode: boolean): void;
    private zoomIn;
    private zoomZero;
    private zoomOut;
    private setState;
    private updateRepresentation;
}
export default QiaMarkDownText;

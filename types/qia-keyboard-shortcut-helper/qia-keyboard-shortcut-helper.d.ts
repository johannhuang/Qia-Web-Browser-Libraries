/**
 *
 * The supported shortcut strings should be made up with a base key string and several optional modifier key strings connected with "+",
 * such as "Space", "Ctrl+Alt+Q" and "control+option+z".
 *
 * Supported key strings are case-insensitive and should be from the following:
 *
 * - One optional ctrl key string in ["Ctrl","control"]
 * - One optional alt key string in ["Alt","option"]
 * - One optional shift key string in ["Shift", "shift"]
 * - One optional meta key string in ["Meta","Windows","command","OS","Win","Cmd"]
 * - One base key string in [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "Space", "Escape", "Tab", "Backspace", "Enter", "Insert", "Delete", "Home", "End", "PageUp", "PageDown", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight" ]
 *
 * Besides the above normal standard shortcuts, there are also several specially supported shortcuts with specially supported base keys.
 * These specially supported base keys include ['-', '='].
 * Necessary to mention, when using these specially supported base keys in shortcuts, there are changes to modifiers:
 *
 * 1. The Alt and Shift modifier keys are not allowed because they are commonly required to generate the specially supported keys on keyboards which don't directly provide these keys
 * 2. The Ctrl modifier key is only usable when the specially supported base key in use doesn't require Alt key to generate.
 *
 * If the specially supported keys still don't include the ones needed, it is also possible to add more specially supported keys.
 * For example, after executing `QiaKeyboardShortcutHelper.extendSpeciallySupportedKeys(['#', 'ß'])`, it is possible to do `QiaKeyboardShortcutHelper.addShortcutListener('ß', handleEszett)`, which could be very useful on German keyboards.
 *
 * And when a combination of keys matches both specially supported shortcuts and normally supported shortcuts, the specially supported shortcut takes precedence.
 * In other words, on English US keyboards, when '#' is added as one of the specially supported keys, '#' takes precedence over 'Shift+3' and 'Ctrl+#' takes precedence over 'Ctrl+Shift+3'.
 *
 *
 * And for both the normally and specially supported shortcuts, there are still several known limitations which are not yet resolved.
 *
 * - on Windows, shortcuts including the Win key and possibly some other shortcuts occupied by the browser in use do not work as expected
 * 	- when the Win key is pressed, the base keys have no keydown events and the keyup events of the base keys have no Win key state
 * 		- as tested on the newest Chrome and Firefox on Microsoft Go 2 as of 20210915
 * - Numpad is not yet considered
 *
 * @module Qia.KeyboardShortcutHelper
 */
interface IQiaKeyboardShortcutInputElement extends HTMLElement {
    value: string;
}
interface IQiaKeyboardShortcutInputElementKeyboardEvent extends KeyboardEvent {
    currentTarget: IQiaKeyboardShortcutInputElement;
}
interface IQiaKeyboardShortcutReactionAreaElement extends HTMLElement {
    dataset: {
        namespace?: string;
    };
}
interface IQiaKeyboardShortcutReactionAreaElementKeyboardEvent extends KeyboardEvent {
    currentTarget: IQiaKeyboardShortcutReactionAreaElement;
    handled?: boolean;
}
interface IQiaKeyboardShortcutListenerConfig {
    namespace?: string;
    platform?: string | string[];
    heuristic?: string;
    nonconsuming?: boolean;
    repeatable?: boolean;
    delayed?: boolean;
}
declare type TAnyFunction = (...args: any[]) => any;
declare class QiaKeyboardShortcutHelper {
    static manageInputElement(inputElement: IQiaKeyboardShortcutInputElement): void;
    static releaseInputElement(inputElement: IQiaKeyboardShortcutInputElement): void;
    static releaseAllInputElements(): void;
    static addShortcutReactionAreaElement(reactionAreaElement: IQiaKeyboardShortcutReactionAreaElement): void;
    static removeShortcutReactionAreaElement(reactionAreaElement: IQiaKeyboardShortcutReactionAreaElement): void;
    static removeAllShortcutReactionAreaElements(): void;
    static addShortcutListener(shortcut: string, handler: TAnyFunction, config?: IQiaKeyboardShortcutListenerConfig): void;
    static removeShortcutListener(shortcut: string, handler: TAnyFunction, config?: IQiaKeyboardShortcutListenerConfig): void;
    static removeAllShortcutListeners(): void;
    static setShortcutListenerGlobalConfig(config: IQiaKeyboardShortcutListenerConfig): void;
    /** This methods allows unusual keys on reginal keyboards to be used as shortcut base keys */
    static extendSpeciallySupportedKeys: (extendedKeys: string[]) => void;
    private static inputElements;
    private static reactionAreaElements;
    private static shortcutListeners;
    private static shortcutListenerGlobalConfig;
    private static lastKeyboardEventStack;
    private static lastKeyboardShortcut;
    private static currentKeyboardEventStack;
    private static buildKeyboardShortcutFromStack;
    private static speciallySupportedKeys;
    private static keyToNamesDict;
    private static keyCodeToSymbolDict;
    private static supportedBaseFunctionalKeys;
    private static supportedBaseSpecialKeys;
    private static supportedBaseKeys;
    private static keyToSymbolDict;
    private static handleKeyDownOnInputElement;
    private static handleBeforeInputOnInputElement;
    private static handleKeyUpOnInputElement;
    private static handleKeyDownOnReactionAreaElement;
    private static handleKeyUpOnReactionAreaElement;
    private static buildRepresentationFromEvent;
    private static normalizeRepresentation;
    private static buildRepresentation;
    private static __setShortcutModifiersFromEvent;
    constructor();
}
export { IQiaKeyboardShortcutInputElement, IQiaKeyboardShortcutInputElementKeyboardEvent, IQiaKeyboardShortcutReactionAreaElement, IQiaKeyboardShortcutReactionAreaElementKeyboardEvent, IQiaKeyboardShortcutListenerConfig };
export default QiaKeyboardShortcutHelper;

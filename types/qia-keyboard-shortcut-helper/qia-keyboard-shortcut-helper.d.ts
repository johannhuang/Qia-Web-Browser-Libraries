/**
 *
 * There are still several known limitations which are not resolved.
 *
 * - on macOS, shortcuts including the Command key do not work as expected (and it is so common to have the Command key in the shortcuts)
 * - on Windows, shortcuts including the Win key and some other shortcuts occupied by the browser in use do not work as expected
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
    consuming?: boolean;
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
    /** The default global config is { consuming: true } */
    static setShortcutListenerGlobalConfig(config: IQiaKeyboardShortcutListenerConfig): void;
    private static inputElements;
    private static reactionAreaElements;
    private static shortcutListeners;
    private static shortcutListenerGlobalConfig;
    private static keyCodeToSymbolDict;
    private static baseFunctionalKeysSupported;
    private static baseSpecialKeysSupported;
    private static baseKeysSupported;
    private static keyToNamesDict;
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

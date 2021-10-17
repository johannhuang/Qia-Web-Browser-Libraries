import QiaCalculation from './qia-calculation/index';
import QiaLayout from './qia-layout/index';
import QiaKeyboardShortcut from './qia-keyboard-shortcut/index';
import QiaAudio from './qia-audio/index';
export { QiaAudio as Audio, QiaKeyboardShortcut as KeyboardShortcut, QiaLayout as Layout, QiaCalculation as Calculation };
declare const _default: {
    Audio: {
        AudioPlayer: typeof import("./qia-audio/qia-audio-player").default;
    };
    KeyboardShortcut: {
        KeyboardShortcutHelper: typeof import("./qia-keyboard-shortcut/qia-keyboard-shortcut-helper").default;
    };
    Layout: {
        LayoutHelper: typeof import("./qia-layout/qia-layout-helper").default;
    };
    Calculation: {
        Calculator: typeof import("./qia-calculation/qia-calculator").default;
    };
};
export default _default;

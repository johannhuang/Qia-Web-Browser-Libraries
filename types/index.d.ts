import QiaCalculator from './qia-calculator';
import QiaLayout from './qia-layout/index';
import QiaKeyboardShortcut from './qia-keyboard-shortcut/index';
import QiaAudio from './qia-audio/index';
export { QiaAudio as Audio, QiaKeyboardShortcut as KeyboardShortcut, QiaLayout as Layout, QiaCalculator as Calculator };
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
    Calculator: typeof QiaCalculator;
};
export default _default;

# Introduction

As a summary, there are currently 3 modules in this package.

* Qia.Layout
	* LayoutHelper
* Qia.KeyboardShortcut
	* KeyboardShortcutHelper
* Qia.Audio
	* AudioPlayer


## Installation

This package can be installed via `npm install qia-browser-libraries` from <https://www.npmjs.com/package/qia-browser-libraries>.


## Usage

There are two ways of using it:

* import as ES modules, e.g., `import Qia from 'qia-browser-libraries'; const QiaKeyboardShortcut = Qia.KeyboardShortcut` or `import { KeyboardShortcut as QiaKeyboardShortcut } from 'qia-browser-libraries'`
* import as HTML scripts, e.g., `<script src="qia-keyboard-shortcut.js"></script>` and `const QiaKeyboardShortcut = window.qia.KeyboardShortcut`

And there are several import entry points for each module. Take Qia.Audio as an example, the import entry points are as the following.

* Qia
	* const Qia = window.qia (srcipt[src="qia-audio.js"] or srcipt[src="qia.js"])
	* import Qia from 'qia-browser-libraries'
* QiaAudio
	* const QiaAudio = Qia.Audio
	* const QiaAudio = window.qia.Audio (srcipt[src="qia-audio.js"] or srcipt[src="qia.js"])
	* import { Audio as QiaAudio } from 'qia-browser-libraries'
	* import QiaAudio from 'qia-browser-libraries/qia-audio'
* QiaAudioPlayer
    * const QiaAudioPlayer = QiaAudio.AudioPlayer
    * const QiaAudioPlayer = window.qia.AudioPlayer (srcipt[src="qia-audio-player.js"])
    * import { AudioPlayer as QiaAudioPlayer } from 'qia-browser-libraries/qia-audio'
    * import QiaAudioPlayer from 'qia-browser-libraries/qia-audio-player'

For details of the usage, please check the documentation (./guides and ./typedoc) in the package.

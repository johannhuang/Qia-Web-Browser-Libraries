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

* import as ES modules, e.g., `import { QiaKeyboardShortcut } from 'qia-browser-libraries'`
* import as HTML scripts, e.g., `<script src="qia-keyboard-shortcut.js"></script>` and `const QiaKeyboardShortcut = window.qia.KeyboardShortcut`

And there are several import entry points for each module. Take Qia.Audio as an example, the import entry points are as the following.

* QiaAudio
    * const QiaAudio = window.qia.Audio (srcipt[src="qia-audio.js"])
    * import QiaAudio from 'qia-browser-libraries/qia-audio'
    * import { QiaAudio } from 'qia-browser-libraries'
* QiaAudioPlayer
    * const QiaAudioPlayer = QiaAudio.AudioPlayer
    * const QiaAudioPlayer = window.qia.AudioPlayer (srcipt[src="qia-audio-player.js"])
    * import QiaAudioPlayer from 'qia-browser-libraries/qia-audio-player'
    * import { AudioPlayer as QiaAudioPlayer } from 'qia-browser-libraries/qia-audio'

For details of the usage, please check the documentation (./guides and ./typedoc) in the package.

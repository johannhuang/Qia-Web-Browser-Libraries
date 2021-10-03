# Introduction

As a summary, there are currently 4 modules in this package.

* Qia.Text
	* MarkDownText
* Qia.Layout
* Qia.KeyboardShortcut
	* KeyboardShortcutHelper
* Qia.Audio
	* AudioPlayer


## Installation

```
npm install qia-browser-libraries # https://www.npmjs.com/package/qia-browser-libraries
```


## Usage

There are two ways of using it:

* import as ES modules, e.g., `import { QiaText } from 'qia-browser-libraries'`
* import as HTML scripts, e.g., `<script src="qia-text.js"></script>` and `const QiaText = window.qia.Text`

And there are several import entry points for each module. Take Qia.Audio as an example, the import entry points are as the following.

* QiaAudio
    * const QiaAudio = window.qia.Audio (srcipt[src="qia-audio.js"])
    * import QiaAudio from 'qia-browser-libraries/qia-audio'
    * import { QiaAudio } from 'qia-browser-libraries'
* QiaAudioPlayer
    * const QiaAudioPlayer = QiaAudio.AudioPlayer
    * const QiaAudioPlayer = window.qia.AudioPlayer (srcipt[src="qia-audio-player.js"] / srcipt[src="qia-audio.js"])
    * import QiaAudioPlayer from 'qia-browser-libraries/qia-audio-player'
    * import { AudioPlayer as QiaAudioPlayer } from 'qia-browser-libraries/qia-audio'

For details of the usage, please check the documentation (./api and ./guides) in the package.


## Dependencies

This browser-libraries depends on other libraries including [SimpleMDE](https://www.npmjs.com/package/simplemde) and [Font Awesome](https://www.npmjs.com/package/font-awesome).

(()=>{var e={195:function(e,t){var i,n,o;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,n=[t],void 0===(o="function"==typeof(i=function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}var o;Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.QiaAudioClip=void 0;var u=function(){function e(i){t(this,e),this.buffer=i}return n(e,[{key:"setBufferSourceNode",value:function(e){this.bufferSourceNode=e}},{key:"setOffset",value:function(e){this.offset=e}},{key:"setDuration",value:function(e){this.duration=e}},{key:"setStartTime",value:function(e){this.startTime=e}}]),e}();e.QiaAudioClip=u;var r=function(){function e(){t(this,e)}return n(e,null,[{key:"enableAutoplay",value:function(){var e=this,t=function t(){window.removeEventListener("touchstart",t);var i=e.audioContext.createBufferSource();i.buffer=e.audioContext.createBuffer(1,1,44100),i.connect(e.audioContext.destination),i.start()};window.addEventListener("touchstart",t)}},{key:"addTimeUpdateListener",value:function(e){e&&this.timeUpdateListeners.push(e)}},{key:"removeTimeUpdateListener",value:function(e){if(e)for(var t=this.timeUpdateListeners.length;t>=0;t--)e===this.timeUpdateListeners[t]&&this.timeUpdateListeners.splice(t,1)}},{key:"playAudioFromFileURL",value:function(e,t){var i=this,n=new Request(e,t);return window.fetch(n).then((function(e){return e.ok?e.arrayBuffer():Promise.reject("Response ".concat(e.status," ").concat(e.statusText))})).then((function(e){return i.audioContext.decodeAudioData(e).then((function(e){return new u(e)}))})).then((function(e){return i.playAudioClip(e),e}))}},{key:"loadAudioClip",value:function(e,t){var i=this,n=new Request(e,t);return window.fetch(n).then((function(e){return e.ok?e.arrayBuffer():Promise.reject("Response ".concat(e.status," ").concat(e.statusText))})).then((function(e){return i.audioContext.decodeAudioData(e).then((function(e){return new u(e)}))}))}},{key:"playAudioClip",value:function(e,t){var i=this;this.scheduledAudioClips.includes(e)&&this.stopAudioClip(e);var n=0,o=e.buffer.duration,u=this.audioContext.currentTime;t&&(void 0!==t.offset&&(n=t.offset),void 0!==t.duration&&(o=t.duration),void 0!==t.startTimeOffset&&(u+=t.startTimeOffset)),this.appendScheduledAudioClip(e);var r=this.audioContext.createBufferSource();r.buffer=e.buffer,r.addEventListener("ended",(function(){console.debug("QiaAudioPlayer: audioClip{startTime:".concat(e.startTime,"} ended")),i.removeScheduledAudioClip(e),console.debug("QiaAudioPlayer: audioClip{startTime:".concat(e.startTime,"} removed from scheduledAudioClips{length: ").concat(i.scheduledAudioClips.length,"}"))})),r.connect(this.audioContext.destination),r.start(u,n,o),e.setBufferSourceNode(r),e.setOffset(n),e.setDuration(o),e.setStartTime(u),1===this.scheduledAudioClips.length&&window.requestAnimationFrame(this.notifyTimeUpdate)}},{key:"muteAudioClip",value:function(e){e&&e.bufferSourceNode&&e.bufferSourceNode.disconnect()}},{key:"unmuteAudioClip",value:function(e){e&&e.bufferSourceNode&&e.bufferSourceNode.connect(this.audioContext.destination)}},{key:"stopAudioClip",value:function(e){e&&e.bufferSourceNode&&e.bufferSourceNode.stop()}},{key:"stopAllAudioClips",value:function(){var e=this;this.scheduledAudioClips.forEach((function(t){e.stopAudioClip(t)}))}},{key:"appendScheduledAudioClip",value:function(e){this.scheduledAudioClips.push(e)}},{key:"removeScheduledAudioClip",value:function(e){var t=this.scheduledAudioClips.indexOf(e);t>-1&&this.scheduledAudioClips.splice(t,1)}}]),e}();o=r,r.audioContext=new AudioContext,r.scheduledAudioClips=[],r.timeUpdateListeners=[],r.notifyTimeUpdate=function(){var e=this.audioContext.currentTime;this.timeUpdateListeners.forEach((function(t){return t(e)})),this.scheduledAudioClips.length&&window.requestAnimationFrame(this.notifyTimeUpdate)}.bind(o);var s=r;e.default=s})?i.apply(t,n):i)||(e.exports=o)}},t={};(function i(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n].call(u.exports,u,u.exports,i),u.exports})(195)})();
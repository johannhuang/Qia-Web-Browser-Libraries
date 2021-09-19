(()=>{var e={886:function(e,t){var n,r,o;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[t],void 0===(o="function"==typeof(n=function(e){"use strict";function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e){return i(e)||a(e)||o(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function i(e){if(Array.isArray(e))return s(e)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}var p;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var y=function(){function e(){l(this,e)}return u(e,null,[{key:"manageInputElement",value:function(e){e&&(this.inputElements.push(e),e.addEventListener("keydown",this.handleKeyDownOnInputElement),e.addEventListener("beforeinput",this.handleBeforeInputOnInputElement),e.addEventListener("keyup",this.handleKeyUpOnInputElement))}},{key:"releaseInputElement",value:function(e){if(e){var t=this.inputElements.indexOf(e);t>-1&&(e.removeEventListener("keydown",this.handleKeyDownOnInputElement,!1),e.removeEventListener("beforeinput",this.handleBeforeInputOnInputElement,!1),e.removeEventListener("keyup",this.handleKeyUpOnInputElement,!1),this.inputElements.splice(t,1))}}},{key:"releaseAllInputElements",value:function(){for(var e=this.inputElements.length-1;e>=0;e--){var t=this.inputElements[e];t.removeEventListener("keydown",this.handleKeyDownOnInputElement,!1),t.removeEventListener("beforeinput",this.handleBeforeInputOnInputElement,!1),t.removeEventListener("keyup",this.handleKeyUpOnInputElement,!1),this.inputElements.splice(e,1)}}},{key:"addShortcutReactionAreaElement",value:function(e){e&&(this.reactionAreaElements.push(e),e.addEventListener("keydown",this.handleKeyDownOnReactionAreaElement,!1),e.addEventListener("keyup",this.handleKeyUpOnReactionAreaElement,!1))}},{key:"removeShortcutReactionAreaElement",value:function(e){if(e){var t=this.reactionAreaElements.indexOf(e);t>-1&&(e.removeEventListener("keydown",this.handleKeyDownOnReactionAreaElement,!1),e.removeEventListener("keyup",this.handleKeyUpOnReactionAreaElement,!1),this.reactionAreaElements.splice(t,1))}}},{key:"removeAllShortcutReactionAreaElements",value:function(){for(var e=this.reactionAreaElements.length-1;e>=0;e--){var t=this.reactionAreaElements[e];t.removeEventListener("keydown",this.handleKeyDownOnReactionAreaElement),t.removeEventListener("keyup",this.handleKeyUpOnReactionAreaElement),this.reactionAreaElements.splice(e,1)}}},{key:"addShortcutListener",value:function(e,t,n){if(e&&t){var r={shortcut:e,handler:t,config:n,normalizedShortcut:this.normalizeRepresentation(e)};this.shortcutListeners.push(r)}}},{key:"removeShortcutListener",value:function(e,t,n){if(e&&t){var r=this.shortcutListeners.findIndex((function(r){return r.shortcut===e&&r.handler===t&&r.config===n}));r>-1&&this.shortcutListeners.splice(r,1)}}},{key:"removeAllShortcutListeners",value:function(){for(var e=this.shortcutListeners.length-1;e>=0;e--)this.shortcutListeners.splice(e,1)}},{key:"setShortcutListenerGlobalConfig",value:function(e){Object.assign(this.shortcutListenerGlobalConfig,e)}},{key:"buildRepresentationFromEvent",value:function(e){var t={ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,key:""},n=e.key,r=e.code,o=e.keyCode;return this.__setShortcutModifiersFromEvent(t,e),["Control","Alt","AltGraph","Shift","Meta"].includes(n)?this.buildRepresentation(t):(this.speciallySupportedKeys.includes(n)?(t.key=n,t.altKey&&t.ctrlKey&&(t.ctrlKey=!1),t.altKey=!1,t.shiftKey=!1):this.keyCodeToSymbolDict.hasOwnProperty(o)?t.key=this.keyCodeToSymbolDict[o]||"":r.startsWith("Digit")?t.key=r.slice("Digit".length):this.supportedBaseFunctionalKeys.includes(r)||[" ","Spacebar"].includes(n)?t.key=r:this.supportedBaseSpecialKeys.includes(n)&&(t.key=n),t.key?this.buildRepresentation(t):"")}},{key:"normalizeRepresentation",value:function(e){var t=this.speciallySupportedKeys,n=this.keyToNamesDict.ctrl.map((function(e){return e.toLowerCase()})),r=this.keyToNamesDict.alt.map((function(e){return e.toLowerCase()})),o=this.keyToNamesDict.shift.map((function(e){return e.toLowerCase()})),a=this.keyToNamesDict.meta.map((function(e){return e.toLowerCase()})),i=this.supportedBaseKeys.map((function(e){return e.toLowerCase()})),s={ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,key:""};if(/^([a-z]+\+){0,4}(\+|[^\+]+)$/i.test(e)){var l="",c=[];if(e.endsWith("+"))l="+",c=e.slice(0,-2).split("+");else{var u=e.split("+");l=u.slice(-1)[0],c=u.slice(0,-1)}c.forEach((function(t){var i=t.toLowerCase();n.includes(i)?s.ctrlKey=!0:r.includes(i)?s.altKey=!0:o.includes(i)?s.shiftKey=!0:a.includes(i)?s.metaKey=!0:console.info("Got unsupported modifier key ".concat(t," in shortcut ").concat(e))}));var p=l.toLocaleLowerCase();if(t.includes(l)){if(s.key=l,s.altKey){var y="Got unsupported modifier key Alt in shortcut ".concat(e," (Base key ").concat(l," triggered special support)");console.info(y),s.altKey=!1}if(s.shiftKey){var h="Got unsupported modifier key Shift in shortcut ".concat(e," (Base key ").concat(l," triggered special support)");console.info(h),s.shiftKey=!1}}else{if(!i.includes(p)){var d="Got unsupported base key ".concat(l," in shortcut ").concat(e);throw new Error(d)}s.key=p}}return this.buildRepresentation(s)}},{key:"buildRepresentation",value:function(e){var t=[];return e.ctrlKey&&t.push(this.keyToSymbolDict.ctrl||"Ctrl"),e.altKey&&t.push(this.keyToSymbolDict.alt||"Alt"),e.shiftKey&&t.push(this.keyToSymbolDict.shift||"Shift"),e.metaKey&&t.push(this.keyToSymbolDict.meta||"Meta"),t.push(this.keyToSymbolDict[e.key.toLowerCase()]||e.key),t.join("+")}},{key:"__setShortcutModifiersFromEvent",value:function(e,t){t.getModifierState("AltGraph")?t.ctrlKey&&t.altKey?(e.ctrlKey=!0,e.altKey=!0):t.ctrlKey?e.ctrlKey=!0:(t.altKey||(e.ctrlKey=!0),e.altKey=!0):(t.ctrlKey&&(e.ctrlKey=!0),t.altKey&&(e.altKey=!0)),t.shiftKey&&(e.shiftKey=!0),(t.metaKey||["Meta","OS","Win"].some((function(e){return t.getModifierState(e)})))&&(e.metaKey=!0),void 0===e.modifiers&&(e.modifiers=[]),["NumLock","CapsLock","AltGraph","Control","Alt","Shift","Meta","OS","Win"].forEach((function(n){t.getModifierState(n)&&e.modifiers.push(n)}))}}]),e}();p=y,y.extendSpeciallySupportedKeys=function(e){var t;(t=p.speciallySupportedKeys).push.apply(t,n(e))},y.inputElements=[],y.reactionAreaElements=[],y.shortcutListeners=[],y.shortcutListenerGlobalConfig={},y.lastKeyboardEventStack=[],y.lastKeyboardShortcut="",y.currentKeyboardEventStack=[],y.buildKeyboardShortcutFromStack=function(e){return""},y.speciallySupportedKeys=n(new Set(["-","+"])),y.keyToNamesDict={space:["Space"," ","Spacebar"],ctrl:["Ctrl","control"],alt:["Alt","option"],altgr:["AltGr","AltGraph"],shift:["Shift","shift"],meta:["Meta","Windows","command","OS","Win","Cmd"]},y.keyCodeToSymbolDict=n(Array(26).keys()).reduce((function(e,n){return Object.assign(e,t({},65+n,String.fromCodePoint(65+n)))}),{}),y.supportedBaseFunctionalKeys=n(Array(20).keys()).map((function(e){return"F".concat(1+e)})),y.supportedBaseSpecialKeys=["Escape","Tab","Backspace","Enter","Insert","Delete","Home","End","PageUp","PageDown","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],y.supportedBaseKeys=n(new Set(Object.values(p.keyCodeToSymbolDict).concat(n(Array(10).keys()).map((function(e){return"".concat(e)}))).concat(p.supportedBaseFunctionalKeys).concat(["Space"]).concat(p.supportedBaseSpecialKeys))),y.keyToSymbolDict=Object.assign({ctrl:"Ctrl",alt:"Alt",altgr:"AltGraph",shift:"Shift",meta:"Meta"},p.supportedBaseKeys.reduce((function(e,n){return Object.assign(e,t({},n.toLowerCase(),n))}),{})),y.handleKeyDownOnInputElement=function(e){e.preventDefault(),e.stopPropagation();var t=y.buildRepresentationFromEvent(e);e.currentTarget.value!==t&&(e.currentTarget.value=t,e.currentTarget.dispatchEvent(new Event("change",{bubbles:!0})))},y.handleBeforeInputOnInputElement=function(e){e.preventDefault(),e.stopPropagation()},y.handleKeyUpOnInputElement=function(e){e.preventDefault(),e.stopPropagation(),e.currentTarget.value.endsWith("+")&&!e.currentTarget.value.endsWith("++")&&"+"!==e.currentTarget.value&&(e.currentTarget.value="",e.currentTarget.dispatchEvent(new Event("change",{bubbles:!0})))},y.handleKeyDownOnReactionAreaElement=function(e){e.handled||p.shortcutListeners.forEach((function(t){var n=Object.assign({},p.shortcutListenerGlobalConfig,t.config);e.repeat&&!n.repeatable||(n.platform&&window.navigator.platform,p.buildRepresentationFromEvent(e)===t.normalizedShortcut&&e.currentTarget.dataset.namespace===n.namespace&&(n.nonconsuming||(e.preventDefault(),e.stopPropagation()),n.delayed||t.handler(new CustomEvent("shortcut",{detail:{shortcut:t.shortcut,config:t.config,reactionAreaElement:{tagName:e.currentTarget.tagName,className:e.currentTarget.className}}})),e.handled=!0))}))},y.handleKeyUpOnReactionAreaElement=function(e){e.handled||p.shortcutListeners.forEach((function(t){var n=Object.assign({},p.shortcutListenerGlobalConfig,t.config);n.platform&&window.navigator.platform,p.buildRepresentationFromEvent(e)===t.normalizedShortcut&&e.currentTarget.dataset.namespace===n.namespace&&(n.nonconsuming||(e.preventDefault(),e.stopPropagation()),n.delayed&&t.handler(new CustomEvent("shortcut",{detail:{shortcut:t.shortcut,config:t.config,reactionAreaElement:{tagName:e.currentTarget.tagName,className:e.currentTarget.className}}})),e.handled=!0)}))};var h=y;e.default=h})?n.apply(t,r):n)||(e.exports=o)},150:function(e,t,n){var r,o,a;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(886)],void 0===(a="function"==typeof(r=function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t=n(t),void 0===window.qia&&(window.qia={}),window.qia.KeyboardShortcutHelper=t.default;var r=t.default;e.default=r})?r.apply(t,o):r)||(e.exports=a)}},t={};(function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports})(150)})();
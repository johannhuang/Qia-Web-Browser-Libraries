/**
 * An audio player which simplifies audio playout in web browsers
 *
 * Hints for usages:
 *
 * - Stop the audio player QiaAudioPlayer is a different concept than stop one AudioClip being played by the audio player
 *
 * @module Qia.AudioPlayer
 */
declare type TAnyFunction = (...args: any[]) => any;
interface IQiaAudioClip {
    buffer: AudioBuffer;
    bufferSourceNode?: AudioBufferSourceNode;
    offset?: number;
    duration?: number;
    startTime?: number;
}
declare class QiaAudioClip implements IQiaAudioClip {
    buffer: AudioBuffer;
    bufferSourceNode?: AudioBufferSourceNode;
    offset?: number;
    duration?: number;
    startTime?: number;
    constructor(buffer: AudioBuffer);
    setBufferSourceNode(bufferSourceNode: AudioBufferSourceNode): void;
    setOffset(offset: number): void;
    setDuration(duration: number): void;
    setStartTime(startTime: number): void;
}
declare class QiaAudioPlayer {
    private static audioContext;
    private static scheduledAudioClips;
    private static timeUpdateListeners;
    private static notifyTimeUpdate;
    static enableAutoplay(): void;
    static addTimeUpdateListener(handler: TAnyFunction): void;
    static removeTimeUpdateListener(handler: TAnyFunction): void;
    static playAudioFromFileURL(input: string | Request, init?: {}): Promise<QiaAudioClip>;
    static loadAudioClip(input: string | Request, init?: {}): Promise<QiaAudioClip>;
    static playAudioClip(audioClip: QiaAudioClip, config?: {
        offset?: number;
        duration?: number;
        startTimeOffset?: number;
    }): void;
    static muteAudioClip(audioClip: IQiaAudioClip): void;
    static unmuteAudioClip(audioClip: IQiaAudioClip): void;
    static stopAudioClip(audioClip: IQiaAudioClip): void;
    static stopAllAudioClips(): void;
    private static appendScheduledAudioClip;
    private static removeScheduledAudioClip;
    constructor();
}
export { IQiaAudioClip, QiaAudioClip };
export default QiaAudioPlayer;

/**
 * This module serves as a template for other modules in aspects as TypeScript, TypeDoc, Babel, Webpack, Karma and Jasmine.
 *
 * @packageDocumentation
 */
/** @private */
declare class _QiaAbstractCalculator {
    constructor();
}
declare class QiaCalculator extends _QiaAbstractCalculator {
    constructor();
    /** A method to add two numbers */
    add(a: number, b: number): number;
}
export default QiaCalculator;

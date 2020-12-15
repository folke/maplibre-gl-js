declare module "@mapbox/unitbezier" {
    class UnitBezier {
        constructor(p1x: number, p1y: number, p2x: number, p2y: number);
        sampleCurveX(t: number): number;
        sampleCurveY(t: number): number;
        sampleCurveDerivativeX(t: number): number;
        solveCurveX(x: number, epsilon: number | void): number;
        solve(x: number, epsilon: number | void): number;
    }

    let __exports: typeof UnitBezier;
    export = __exports
}

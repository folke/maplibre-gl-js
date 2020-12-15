declare module "@mapbox/mapbox-gl-supported" {
    type isSupported = {
        webGLContextAttributes: WebGLContextAttributes,
        (
            options?: {
                failIfMajorPerformanceCaveat: boolean
            }
        ): boolean
    };

    let __exports: isSupported;
    export = __exports
}

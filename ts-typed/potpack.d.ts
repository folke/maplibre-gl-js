declare module "potpack" {
    type Bin = {
        x: number,
        y: number,
        w: number,
        h: number
    };

    function potpack(bins: Array<Bin>): {
        w: number,
        h: number,
        fill: number
    }

    let __exports: typeof potpack;
    export = __exports
}

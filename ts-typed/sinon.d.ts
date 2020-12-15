// @flow strict
declare module "sinon" {
    type SpyCall = {
        args: Array<unknown>
    };

    type Spy = {
        calledOnce: number,
        getCall(i: number): SpyCall,
        (): any
    };

    type Stub = {
        callsFake(fn: unknown): Spy
    };

    class FakeServer {
        xhr: XMLHttpRequest;
    }

    type Sandbox = {
        xhr: {
            supportsCORS: boolean
        },
        fakeServer: {
            create: () => FakeServer
        },
        createSandbox(options: unknown): Sandbox,
        stub(obj?: unknown, prop?: string): Stub,
        spy(obj?: unknown, prop?: string): Spy,
        restore(): void
    };

    let __exports: Sandbox;
    export = __exports
}

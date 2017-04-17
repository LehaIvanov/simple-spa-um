import * as React from "react";

export class Root extends React.Component<{}, void> {
    // tslint:disable-next-line:prefer-function-over-method
    public render(): JSX.Element {
        return (
            <div>
                <h1>Hello, world!:)</h1>
            </div>
        );
    }
}

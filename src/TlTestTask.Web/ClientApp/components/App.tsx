import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import * as React from "react";

export class App extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <MuiThemeProvider>
                <div>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}

import { Component, ReactNode } from "react";
import ErrorPage from "../pages/error";

type Props = { children: ReactNode };

type State = { hasError: boolean; error?: Error };

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    console.error("App error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorPage
          error={this.state.error!}
          reset={() => this.setState({ hasError: false })}
        />
      );
    }
    return this.props.children;
  }
}

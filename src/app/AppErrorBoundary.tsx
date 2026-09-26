import { Component, type ErrorInfo, type ReactNode } from "react";
export class AppErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Sidequest rendering failed", error, info.componentStack);
  }

  render() {
    return this.state.failed
      ? <main role="alert">The app could not start. Please reload the page.</main>
      : this.props.children;
  }
}

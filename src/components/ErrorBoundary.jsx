import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log error to a monitoring service if desired
    // console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container py-5">
          <div className="alert alert-warning" role="alert">
            Something went wrong. Please refresh the page.
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

import React from "react";

class LocalErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error) {
    console.error('Embedded Tweet error:', error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm px-4 py-3 rounded-xl w-full">
          <p className="text-sm text-gray-700 dark:text-gray-300">Tweet could not be loaded — <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-blue-600">view on Twitter</a>.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export function SocialCards() {
  // Removed embedded LinkedIn and Twitter posts per request.
  return <></>;
}

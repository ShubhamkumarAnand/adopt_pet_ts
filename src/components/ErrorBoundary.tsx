import { Component, ErrorInfo, ReactElement } from "react"
import { Link } from "react-router-dom"

class ErrorBoundary extends Component<{ children: ReactElement }> {
  state = { hasError: false }
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // TrackJs or NewRelic
    console.error("ErrorBoundary component caught an Error", error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>
            There was an Error with this listing.{" "}
            <Link to="/">Click Here to Go Back to Home Page</Link>
          </h2>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary

import { Component } from "react"
import { Link } from "react-router-dom"

class ErrorBoundary extends Component {
  state = { hasError: false }
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
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

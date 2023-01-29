import { useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createRoot } from "react-dom/client"
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"

import Details from "./components/Details"
import SearchParams from "./components/SearchParams"
import AdoptedCreateContext from "./context/AdoptedPetContext"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
})

const App = () => {
  const adoptedPet = useState(null)
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AdoptedCreateContext.Provider value={adoptedPet}>
          <header>
            <Link to="/">Adopt Me</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </AdoptedCreateContext.Provider>
      </QueryClientProvider>
    </Router>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

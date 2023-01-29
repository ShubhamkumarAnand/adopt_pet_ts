import { useContext, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom"

import AdoptedCreateContext from "../context/AdoptedPetContext"
import { PetAPIResponse } from "../utils/APIResponsesTypes"
import fetchPet from "../utils/fetchPet"
import Carousel from "./Carousel"
import ErrorBoundary from "./ErrorBoundary"
import Modal from "./Modal"

const Details = () => {
  const { id } = useParams()
  if (!id) {
    throw new Error("why didn't you provide me an id?")
  }
  const results = useQuery<PetAPIResponse>(["details", id], fetchPet)
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedCreateContext)

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🕸</h2>
      </div>
    )
  }

  const pet = results?.data?.pets[0]
  if (!pet) {
    throw new Error("No Pet found")
  }

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        <button onClick={() => setShowModal(true)}>
          Adopt Me : {pet.name}
        </button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to Adopt the {pet.name}</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    setAdoptedPet(pet)
                    navigate("/")
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  )
}

function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  )
}
export default DetailsErrorBoundary

import { useContext, useState } from "react"
import { useQuery } from "@tanstack/react-query"

import AdoptedPetContext from "../context/AdoptedPetContext"
import { Animal } from "../utils/APIResponsesTypes"
import fetchSearch from "../utils/fetchSearch"
import useBreedList from "../utils/useBreedList"
import Results from "./Results"

const ANIMALS: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"]

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "" as Animal,
    breed: "",
  })
  const [animal, setAnimal] = useState("" as Animal)
  const [breeds] = useBreedList(animal)

  const [adoptedPet] = useContext(AdoptedPetContext)

  const results = useQuery(["search", requestParams], fetchSearch)
  const pets = results?.data?.pets ?? []

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          const obj = {
            animal:
              (formData.get("animal")?.toString() as Animal) ?? ("" as Animal),
            location: formData.get("location")?.toString() ?? "",
            breed: formData.get("breed")?.toString() ?? "",
          }
          setRequestParams(obj)
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input name="location" id="location" placeholder="location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value as Animal)
            }}
            onBlur={(e) => {
              setAnimal(e.target.value as Animal)
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select id="breed" disabled={!breeds.length} name="breed">
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  )
}

export default SearchParams

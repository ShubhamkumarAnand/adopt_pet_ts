import { createContext } from "react"

import { Pet } from "../utils/APIResponsesTypes"

const AdoptedCreateContext = createContext<[Pet, (adoptedPe: Pet) => void]>([
  {
    id: 1337,
    name: "Fido",
    animal: "bird",
    description: "Lorem Ipsum",
    breed: "beagle",
    images: [],
    city: "seattle",
    state: "WA",
  },
  () => {},
])

export default AdoptedCreateContext

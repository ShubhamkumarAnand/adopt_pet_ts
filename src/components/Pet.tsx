import { Link } from "react-router-dom"

import { Animal } from "../utils/APIResponsesTypes"

interface IProps {
  id: number
  name: string
  breed: string
  images: string[]
  location: string
  animal: Animal
}
const Pet = (props: IProps) => {
  const { id, name, animal, breed, images, location } = props
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg"
  if (images.length) {
    hero = images[0]
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  )
}

export default Pet

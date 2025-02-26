class Restaurant {
  id: number
  title: string
  description: string
  rate: number
  image: string
  infos: string[]

  constructor(
    id: number,
    title: string,
    description: string,
    rate: number,
    image: string,
    infos: string[]
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.rate = rate
    this.image = image
    this.infos = infos
  }
}

export default Restaurant

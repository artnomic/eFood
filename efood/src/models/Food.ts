class Food {
  id: number
  restaurantId: number
  title: string
  description: string
  image: string

  constructor(
    id: number,
    restaurantId: number,
    title: string,
    description: string,
    image: string
  ) {
    this.id = id
    this.restaurantId = restaurantId
    this.title = title
    this.description = description
    this.image = image
  }
}

export default Food

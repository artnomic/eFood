import { Imagem, Segmento, Titulo } from './styles'

type Props = {
  title: string
  image: string
  segment: string
}

const Banner = ({ title, segment, image }: Props) => (
  <>
    <Imagem
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`
      }}
    >
      <div className="container">
        <Segmento>
          {segment.charAt(0).toUpperCase() + segment.slice(1)}
        </Segmento>
        <Titulo>{title}</Titulo>
      </div>
    </Imagem>
  </>
)

export default Banner

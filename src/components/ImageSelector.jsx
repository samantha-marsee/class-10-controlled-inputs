export default function ImageSelector({onImgChange}) {
  const blackSeal = '/images/cornell-seal-black.svg'
  const redSeal = '/images/cornell-seal-red.svg'

  return (
    <div className="selector">
      <button onClick = {() => {onImgChange(blackSeal)}}>
        <img src={blackSeal} />
      </button>
      <button onClick = {() => {onImgChange(redSeal)}}>
        <img src={redSeal} />
      </button>
      <button onClick = {() => {onImgChange(undefined)}}>
        <em>None</em>
      </button>
    </div>
  )
}

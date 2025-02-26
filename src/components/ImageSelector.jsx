export default function ImageSelector() {
  const blackSeal = '/images/cornell-seal-black.svg'
  const redSeal = '/images/cornell-seal-red.svg'

  return (
    <div className="selector">
      <button>
        <img src={blackSeal} />
      </button>
      <button>
        <img src={redSeal} />
      </button>
      <button>
        <em>None</em>
      </button>
    </div>
  )
}

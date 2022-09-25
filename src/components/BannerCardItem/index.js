import './index.css'

const CardProfile = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <li className={`${className} card-container`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button className="button-has-type" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default CardProfile

import React from "react"
import "./../global-css/basics.css"
import "./css/card.css"

class PropImage extends React.Component {
  render() {
    const imgClass = this.props.isLight ? "img-light" : "img-dark"

    return (
      <div className={"alignCenter " + imgClass}>
        <img
          src={require(`./../../../assets/${this.props.imgName}`)}
          alt="Project Prop"
          height="100%"
        />
      </div>
    )
  }
}

export default PropImage

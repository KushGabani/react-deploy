import React from "react"
import "./../global-css/basics.css"

class Avatar extends React.Component {
  render() {
    return (
      <div className="alignCenter">
        <img
          src={require("./../../../assets/Prop2.png")}
          style={{ borderRadius: "50%" }}
          alt="avatar"
          width="150"
        />
      </div>
    )
  }
}

export default Avatar

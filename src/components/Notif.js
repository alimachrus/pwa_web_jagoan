import React, { Component } from "react";
import { connect } from "react-redux";

class Notif extends Component {
  render() {
    return <div>Notif</div>;
  }
}
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(Notif);

import React, { Component } from "react";
import { connect } from "react-redux";

class Responsive extends Component {
  render() {
    return <div>Responsive</div>;
  }
}
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(Responsive);

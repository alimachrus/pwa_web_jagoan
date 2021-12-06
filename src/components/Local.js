import React, { Component } from "react";
import { connect } from "react-redux";

class Local extends Component {
  render() {
    return <div>Local</div>;
  }
}
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(Local);

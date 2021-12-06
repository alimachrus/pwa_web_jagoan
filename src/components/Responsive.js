import React, { Component } from "react";
import { connect } from "react-redux";

class Responsive extends Component {
  render() {
    return (
      <main className="main_container">
        <h1>Responsive</h1>
      </main>
    );
  }
}
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(Responsive);

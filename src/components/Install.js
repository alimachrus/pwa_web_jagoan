import React, { Component } from "react";
import { connect } from "react-redux";

class Install extends Component {
  render() {
    return (
      <main className="main_container">
        <h1>Installable</h1>
      </main>
    );
  }
}
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(Install);

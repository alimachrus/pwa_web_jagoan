import React, { Component } from "react";
import { connect } from "react-redux";

class Local extends Component {
  render() {
    return (
      <main className="main_container">
        <h1>Simpan data di localstorage</h1>
      </main>
    );
  }
}
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(Local);

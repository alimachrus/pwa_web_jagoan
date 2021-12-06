import React, { Component } from "react";
import { connect } from "react-redux";

class Notif extends Component {
  render() {
    return (
      <main className="main_container">
        <h1>Web Push Notification</h1>
      </main>
    );
  }
}
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(Notif);

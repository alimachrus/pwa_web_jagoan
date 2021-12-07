import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <main className="main_container">
        <h1>Progressive Web Application</h1>
        <Link to="/install">
          <button className="button_square">Installable</button>
        </Link>
        <Link to="/local">
          <button className="button_square">Local Storage</button>
        </Link>
        <Link to="/notif">
          <button className="button_square">Web Notif</button>
        </Link>
      </main>
    );
  }
}
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(Home);

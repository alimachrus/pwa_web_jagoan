import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <main className="main_container">
        <h1>Progressive Web Application</h1>
        <Link to="/responsive">
          <button className="button_main">Responsive</button>
        </Link>
        <Link to="/install">
          <button className="button_main">Installable</button>
        </Link>
        <Link to="/local">
          <button className="button_main">Local Storage</button>
        </Link>
        <Link to="/notif">
          <button className="button_main">Web Notif</button>
        </Link>
      </main>
    );
  }
}
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(Home);

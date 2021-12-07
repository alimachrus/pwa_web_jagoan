import React, { Component } from "react";
import { connect } from "react-redux";
import install_1 from "../img/install_1.png";
import install_2 from "../img/install_2.png";

class Install extends Component {
  render() {
    return (
      <main className="main_container">
        <h1>Installable</h1>
        <p>Menyimpan front end build dari web menjadi serupa aplikasi</p>
        <img
          alt="Perbandingan PWA dan non PWA"
          src={install_1}
          style={{ width: "65vw", marginBottom: "30px" }}
        />
        <img
          alt="Proses installasi PWA"
          src={install_2}
          style={{ width: "65vw" }}
        />
      </main>
    );
  }
}
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(Install);

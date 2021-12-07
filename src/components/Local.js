import React, { Component } from "react";
import { connect } from "react-redux";
import { saveLocal } from "../actions/dataActions";

class Local extends Component {
  state = {
    data: "",
  };
  handleChange = (e) => {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { data } = this.state;
    this.props.saveLocal(data);
    this.setState({ data: "" });
  };
  render() {
    const local_data = localStorage.local_data
      ? JSON.parse(localStorage.local_data)
      : [];
    const local_data_render = local_data.map((item, idx) => {
      return (
        <main key={idx} className="name_container">
          <h3>{item}</h3>
        </main>
      );
    });

    return (
      <main className="main_container">
        <h1>Simpan data ke localstorage</h1>
        <p>
          Menyimpan data JSON pada localstorage hingga 5MB yang bisa diakses
          walaupun offline
        </p>
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Nama</label>
          <br />
          <textarea
            onChange={this.handleChange}
            type="text"
            id="data"
            name="data"
            value={this.state.data}
            placeholder="Ketik dan simpan offline..."
          />
          <br />
          <button type="submit" value="Submit" className="button_main">
            Simpan
          </button>
        </form>
        {local_data_render}
      </main>
    );
  }
}
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { saveLocal })(Local);

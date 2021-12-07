import React, { Component } from "react";
import { connect } from "react-redux";
import { urlB64ToUint8Array } from "../validation/worker-stuff";
import { pushData, getData } from "../actions/dataActions";
import logo from "../img/logo.png";
import badge from "../img/badge.png";
//Variable untuk menyimpan domain server untuk menyimpan data id push notifikasi ke database
const SERVER_URL = "https://server.mapid.io";
// const SERVER_URL = "http://localhost:4000";

//Fungsi untuk menampilkan badge notifikasi greeting
function displayLocalNotifGreeting() {
  if ("serviceWorker" in navigator) {
    var options = {
      body: "Terimakasih Jagoan!",
      icon: logo,
      badge: badge,
      dir: "ltr",
      lang: "en-US", //BCP 47
      vibrate: [100, 50, 200],
      tag: "jagoan",
      renotify: true,
      actions: [{ action: "ok", title: "Sip !", icon: logo }],
    };
    navigator.serviceWorker.ready.then(function (swreg) {
      swreg.showNotification("jagoan", options);
    });
  }
}

//Fungsi untuk menampilkan badge notifikasi secara lokal
function displayLocalNotif() {
  if ("serviceWorker" in navigator) {
    var options = {
      body: "Contoh body notifikasi (notifikasi lokal)",
      icon: logo,
      badge: badge,
      dir: "ltr",
      lang: "en-US", //BCP 47
      vibrate: [100, 50, 200],
      tag: "jagoan",
      renotify: true,
      actions: [{ action: "ok", title: "Okay", icon: logo }],
    };
    navigator.serviceWorker.ready.then(function (swreg) {
      swreg.showNotification("Jagoan", options);
    });
  }
}

//Fungsi untuk mengirim data id browser ke database
function configurePushSub() {
  if (!("serviceWorker" in navigator)) {
    return;
  }
  let reg;
  navigator.serviceWorker.ready
    .then(function (swreg) {
      reg = swreg;
      return swreg.pushManager.getSubscription();
    })
    .then(function (sub) {
      if (sub === null) {
        const vapid_public_key =
          "BOwZhDDLnANtDE3e1svvstbw5OuiOF7gbxBtsPwgjMLIRFtgK4pHXCzcadk4UExGDFSh5hQYPiHyCxpgwb5E0mM";
        const converted_key = urlB64ToUint8Array(vapid_public_key);
        return reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: converted_key,
        });
      } else {
        displayLocalNotifGreeting();
      }
    })
    .then(function (new_sub) {
      return fetch(SERVER_URL + "/publics/push_device", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(new_sub),
      });
    })
    .then(function (res) {
      if (res.ok) {
        displayLocalNotifGreeting();
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

class Notif extends Component {
  state = {
    add_status: false,
    name: "",
    kucing: "oren",
  };
  componentDidMount() {
    this.props.getData();
  }
  toggleAdd = () => {
    this.setState({ add_status: !this.state.add_status });
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
    const { name, kucing } = this.state;
    const body = { name, kucing };
    this.props.pushData(body);
    this.setState({ add_status: false, name: "" });
  };
  render() {
    const { add_status, name, kucing } = this.state;
    const { list, loading } = this.props.data;
    const list_kucing = [
      "Kucing oren",
      "Kucing item",
      "Kucing loreng",
      "Kucing gendut",
    ];
    const add_content = add_status && (
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Nama</label>
        <br />
        <input
          onChange={this.handleChange}
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Nama samaran"
        />
        <br />
        <label htmlFor="name">Pilih kucing</label>
        <br />
        <select
          id="kucing"
          name="kucing"
          value={kucing}
          onChange={this.handleChange}
        >
          {list_kucing.map((k, idx) => {
            return (
              <option key={idx} value={k}>
                {k}
              </option>
            );
          })}
        </select>
        <br />
        <button type="submit" value="Submit" className="button_main">
          Kirim
        </button>
      </form>
    );

    const data_content = list.map((item, idx) => {
      return (
        <main key={idx} className="name_container">
          <h3>{item.name}</h3>
          <p>Suka kucing {item.kucing}</p>
        </main>
      );
    });

    let text = "Tes Tambah Data";
    if (add_status) {
      text = "Tutup";
    } else if (loading) {
      text = "Mengirim data...";
    }

    return (
      <main className="main_container">
        <h1>Web Push Notification</h1>
        <p>Broadcast notifikasi menggunakan web</p>
        <button onClick={configurePushSub} className="button_main">
          Nyalakan Notifikasi
        </button>
        <br />
        <button onClick={displayLocalNotif} className="button_main">
          Tes Notifikasi Lokal
        </button>
        <br />
        <button onClick={this.toggleAdd} className="button_main">
          {text}
        </button>
        {add_content}
        <br />
        {data_content}
      </main>
    );
  }
}
const mapStateToProps = (state) => ({ data: state.data });
export default connect(mapStateToProps, { pushData, getData })(Notif);

import { Component } from 'react';
import './App.css';
import Modal from './components/Modal';

class App extends Component {
  state = {
    showModal: false,
  }
  openModal = () => {
    this.setState({showModal: true})
  }
  closeModal = () => {
    this.setState({showModal: false})
  }
  render() {
    return (
      <>
        <button onClick={this.openModal}>Відкрити модалку</button>
        <Modal show={this.state.showModal} onClose={this.closeModal} />
      </>
    );
  }
}

export default App;

import './App.css';
//der Import für React
import React from 'react';
class App extends React.Component {
  //der Konstruktor
  constructor(props) {
    //den Konstruktor der übergeordneten Klasse aufrufen
    super(props);
    //den State setzen
    //er ist hier leer
    this.state = { eingabe: '' };
    //die Methoden binden
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //die Methoden für die Ereignisbehandlung
  //bei Veränderungen wird der State über setState() angepasst
  handleChange(event) {
    console.log('event', event);
    this.setState({ eingabe: event.target.value });
  }
  //beim Abschicken wird der Wert ausgegeben
  handleSubmit(event) {
    alert('Der Wert ' + this.state.eingabe + ' wurde eingegeben.');
    event.preventDefault();
  }
  //die Methode render()
  render() {
    return (
      <div>
        <h1>Ein einfaches Formular</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Ihre Eingabe?"
            value={this.state.eingabe}
            onChange={this.handleChange} />
          <input type="submit" value="Ausgeben" />
        </form>
      </div>
    );
  }
}
export default App;
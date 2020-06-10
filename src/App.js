import React from 'react';
import './App.css';
import './flatpickr.css';
import AirTable from './airtable';
import Formmenu from './formmenu';
import MailChimp from './mailchimp';
import UpdateMailchimp from './updatemailchimp';
import Dashboard from './dashboard';
import APIRequestForm from './apirequestform';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      airtableAPI: '',
      airtableBase: '',
      mailchimpAPI: '',
      APIisValid: false
    }

    this.airtableAPICallback = this.airtableAPICallback.bind(this)
    this.airtableBaseCallback = this.airtableBaseCallback.bind(this)
    this.mailchimpAPICallback = this.mailchimpAPICallback.bind(this)
    this.validAPICallback = this.validAPICallback.bind(this)
  }

  airtableAPICallback = (airtableAPI) => {
    this.setState({
      airtableAPI: airtableAPI
  });
  }

  airtableBaseCallback = (airtableBase) => {
    this.setState({
      airtableBase: airtableBase
  });
  }

  mailchimpAPICallback = (mailchimpAPI) => {
    this.setState({
      mailchimpAPI: mailchimpAPI
  });
  }

  validAPICallback = (valid) => {
    this.setState({
      APIisValid: valid
  }, function () {
    console.log("in app.js keysValid is valid?", this.state.keysValid);
  });

  }

  render() {
    const { APIisValid } = this.state;
    console.log("in app.js api key is valid?", this.state.APIisValid)
    console.log("in app.js airtableapi?", this.state.airtableAPI)
    console.log("in app.js airtablebase?", this.state.airtableBase)
    console.log("in app.js mailchimpapi?", this.state.mailchimpAPI)
  return (
    <div>
      {!APIisValid ? <APIRequestForm callbackForAirtableAPI={this.airtableAPICallback} callbackForAirtableBase={this.airtableBaseCallback} callbackForMailchimpAPI={this.mailchimpAPICallback} callbackForValidation={this.validAPICallback} /> : null}
      {APIisValid ? <Dashboard airtableAPI={this.state.airtableAPI} airtableBase={this.state.airtableBase} mailchimpAPI={this.state.mailchimpAPI}/> : null}
    </div>
  );  
  }
}


export default App;


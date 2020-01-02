import React from 'react';
import FormComponent from "./FormComponent";
import ResultComponent from './ResultComponent';
import './App.css';

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          longURL: "",
          shortURL: "",
          submitted: false,
          useCustomShortURL: false,
          customShortURL: "",
          resultErrorMessage: ""
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleReturnToHome = this.handleReturnToHome.bind(this);
  }
  
  // Given a longURL, get a shortURL from backend
  getShortURL = async () => {
    // POST request to API with the longURL
    let response;
    try {
      response = await fetch('/api/url/shorten/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          longURL: this.state.longURL,
          useCustomShortURL: this.state.useCustomShortURL,
          customShortURL: this.state.customShortURL
        }),
      });
    } catch (error) {
      console.error(error);
    }

    // User entered in a valid long URL 
    const responseBody = await response.json();
    // console.log(responseBody);
    if (response.status === 200) this.setState({ shortURL: responseBody.shortUrl});
    // Some other error
    else {
      if (responseBody.errorCode === 1001) this.setState({ resultErrorMessage: "Your custom short URL '" + this.state.customShortURL + "' is in an invalid format. Try another short URL."});
      else if (responseBody.errorCode === 1002) this.setState({ resultErrorMessage: "Your custom short URL already exists. Try another short URL." });
      else if (responseBody.errorCode === 1004) this.setState({ resultErrorMessage: "You entered in an invalid long URL. Try another long URL." });
      else this.setState({ resultErrorMessage: "Internal Server Error. Something is wrong on our end. Sorry! "});
    }
  }

  // User modified any form elements (not including the 'Submit' button)
  handleChange(event) {
      // Figure out which of the form elements triggered handleChange(). Update state accordingly
      if (event.target.type === "checkbox") {
          this.setState({
              [event.target.name]: event.target.checked
          })
      } else {
          this.setState({
              [event.target.name]: event.target.value
          })
      }
  }
  
  // User clicked the 'Submit' button
  handleSubmit(){
      console.log("Pressed 'Submit' button");
      this.setState({submitted: true});
      this.getShortURL();
  }

  // User clicks on the 'Return to Home' button
  handleReturnToHome(){ 
    this.setState({
      longURL: "",
      shortURL: "",
      submitted: false,
      useCustomShortURL: false,
      customShortURL: "",
      resultErrorMessage: ""
      });
  }
  
  render() {
    // By default, renders the home page to the user
    if (!this.state.submitted) {
      return (
        <div>
          <FormComponent 
            handleChange={this.handleChange}
            data={this.state}
            handleSubmit={this.handleSubmit}
          />
        </div>
      )
    }
    // Display result to user. They can choose to input another long URL 
    return (
      <div>
        <ResultComponent
          data={this.state}
          handleReturnToHome={this.handleReturnToHome}
        />
      </div>
    )
  }
}

export default App;

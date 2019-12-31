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
          useCustomShortURL: false,
          customShortURL: "http://localhost:5000/"
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleReturnToHome = this.handleReturnToHome.bind(this);
  }
  
  componentDidMount() {

  }
  
  // Given a longURL, get a shortURL from backend
  getShortURL = async (longURL) => {
    // POST request to API with the longURL
    let response;
    
    try {
      response = await fetch('/api/url/shorten/', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: longURL
      });
    } catch (error) {
      console.error(error);
    }

    // User entered in a valid long URL 
    if (response.status === 200) {
      console.log("You entered a valid URL");
      const data = await response.json();
      this.setState({ shortURL: data.shortUrl});
      console.log(data);
    } 
    // Some other error
    else {
      // User entered in an invalid long URL
      if (response.status === 401) {
        console.log("Your long URL is incorrect");
      } 
      // Some other error (likely internal server error)
      else {
        console.log("Some other error");
      }

    }
  }

  handleChange(event) {
      console.log("Form element is " + event.target.name);
      // Figure out which of the form elements triggered handleChange()
      if (event.target.type === "checkbox") {
          this.setState({
              [event.target.name]: event.target.checked
          })
      } else {
          this.setState({
              [event.target.name]: event.target.value
          })
      }
      // console.log(event.target.value);
      // this.callApi();
  }
  
  // Return a short URL for the user
  handleSubmit(){
      console.log("Pressed 'Submit' button");
      this.setState({submitted: true});

      this.getShortURL(this.state.longURL);
  }

  handleReturnToHome(){ 
    console.log("Pressed 'Go Back' button");

    this.setState({submitted: false});
  }
  
  render() {
    // This is the default page shown to the user
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
    // Display result to user. They can choose to generate a new short URL 
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

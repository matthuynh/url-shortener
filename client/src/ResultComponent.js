import React from "react";

// If the user provided a valid long URL, displays the short URL. Otherwise, prompts user to try again.
function ResultComponent(props) {
  let displayText = (props.data.shortURL) ? ("Your short URL is " + props.data.shortURL) : "You entered an invalid URL, please try again";
	return (
		<main>
      <p> {displayText} </p>
			<form>
        <button 
          type="button" 
          onClick={props.handleReturnToHome}
        >
        Go back
        </button>
			</form>
		</main>
	);
}

export default ResultComponent;

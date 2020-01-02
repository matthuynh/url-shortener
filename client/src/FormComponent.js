import React from "react";

function FormComponent(props) {
	return (
		<main>
			<form>
				<input
					type="text"
					name="longURL"
					placeholder="Enter the URL that you want to shorten"
					value={props.data.longURL}
					onChange={props.handleChange}
				/>
				<br />

				<input
					type="text"
					name="customShortURL"
					placeholder="Enter the custom short URL that you wish to use"
					value={props.data.customShortURL}
          onChange={props.handleChange}
          style = {{ display: (!props.data.useCustomShortURL && 'none') }}
				/>
				<br />

				<label>
					<input
						type="checkbox"
						name="useCustomShortURL"
						onChange={props.handleChange}
						checked={props.data.useCustomShortURL}
					/>
					Use my own custom short URL
				</label>
				<br />
				Requirements: your short URL must be at least 4 characters long, and may be alphanumeric (a-zA-Z0-9)
				<br />
        <button 
          type="button" 
					onClick={props.handleSubmit}
        >
        Generate my URL!
        </button>

			</form>
			<hr />
			<h2>Entered information:</h2>
			<p>Your URL: {props.data.longURL}</p>
			<p>
				Use own short URL?:{" "}
				{props.data.useCustomShortURL ? "Yes" : "No"}
			</p>
		</main>
	);
}

export default FormComponent;

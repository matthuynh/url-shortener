import React from "react";

import "react-bulma-components/dist/react-bulma-components.min.css";

function FormComponent(props) {
	return (
		<main>
			<section class="section">
				<div class="container">
					<section class="section">
						<h1 className="title has-text-centered"> Shrinkly </h1>
					</section>

					<section class="section">
						<form>
							<section class="section">
								<div class="container">
									<div class="columns is-mobile is-multiline is-gapless">
										<div class="column is-10">
											<input
												class="input is-primary is-medium"
												type="text"
												name="longURL"
												placeholder="Enter the URL that you want to shorten"
												value={props.data.longURL}
												onChange={props.handleChange}
											/>
										</div>
										<div class="column is-2 is-1-mobile">
											<button
												class="button is-medium is-small-mobile"
												type="button"
												onClick={props.handleSubmit}
											>
												Generate
											</button>
										</div>
									</div>
								</div>
							</section>
							<br />
							<input
								type="text"
								name="customShortURL"
								placeholder="Enter the custom short URL that you wish to use"
								value={props.data.customShortURL}
								onChange={props.handleChange}
								style={{
									display:
										!props.data.useCustomShortURL && "none"
								}}
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
							Requirements: your short URL must be at least 4
							characters long, and may be alphanumeric (a-zA-Z0-9)
							<br />
						</form>
					</section>
				</div>
			</section>
		</main>
	);
}

export default FormComponent;

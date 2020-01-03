import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

function FormComponent(props) {
	return (
		<main>
			{/* Main section */}
			<section class="section">
				<div class="container">
					{/* Page logo and title */}
					<section class="section">
						<h1 className="title has-text-centered"> Shrinkly </h1>
					</section>
					{/* End of page logo and title */}

					{/* Input form */}
					<section class="section">
						<form>
							<section class="section">
								<div class="container">
									<div class="columns is-mobile is-gapless">
										<div class="column is-9">
											{/* Textfield input for long URL */}
											<input
												class="input is-primary is-medium"
												type="text"
												name="longURL"
												placeholder="Enter the URL that you wish to shorten"
												value={props.data.longURL}
												onChange={props.handleChange}
											/>
											{/* Checkbox for "More options" */}
											<label class="radio">
												<input
													type="radio"
													name="useExtraOptions"
													onChange={
														props.handleChange
													}
													checked={
														props.data
															.useExtraOptions
													}
												/>{" "}
												More options
											</label>
											<br />

											<nav class="level is-mobile">
												{/* Checkbox input for custom short URL textfield */}
												<div class="level-left">
													<label>
														<input
															type="checkbox"
															name="useCustomShortURL"
															onChange={
																props.handleChange
															}
															checked={
																props.data
																	.useCustomShortURL
															}
															style={{
																display:
																	!props.data
																		.useExtraOptions &&
																	"none"
															}}
														/>
														<span
															style={{
																display:
																	!props.data
																		.useExtraOptions &&
																	"none"
															}}
														>
															{" "}
															Generate custom URL
														</span>
													</label>
												</div>
												{/* Checkbox input for "Preview" option */}
												<div class="level-right">
													<label>
														<input
															type="checkbox"
															name="useCustomShortURL"
															onChange={
																props.handleChange
															}
															checked={
																props.data
																	.useCustomShortURL
															}
															style={{
																display:
																	!props.data
																		.useExtraOptions &&
																	"none"
															}}
														/>
														<span
															style={{
																display:
																	!props.data
																		.useExtraOptions &&
																	"none"
															}}
														>
															{" "}
															Preview
														</span>
													</label>
												</div>
											</nav>
											<br />

											{/* Textfield input for "Use Custom Short URL" option */}
											<div class="field has-addons">
												<p class="control">
													<span
														class="button is-small is-static"
														style={{
															display:
																!props.data
																	.useCustomShortURL &&
																"none"
														}}
													>
														https://localhost:3000/
													</span>
												</p>
												<p class="control is-fullwidth is-expanded">
													<input
														class="input is-small is-expanded is-fullwidth"
														type="text"
														name="customShortURL"
														placeholder="custom URL"
														value={
															props.data
																.customShortURL
														}
														onChange={
															props.handleChange
														}
														style={{
															display:
																!props.data
																	.useCustomShortURL &&
																"none"
														}}
													/>
												</p>
											</div>
										</div>
										{/* End of column for textfield and extra options */}
										{/* Input for Submit button */}
										<div class="column is-3">
											<button
												class="button is-primary is-medium is-fullwidth"
												type="button"
												onClick={props.handleSubmit}
											>
												<p class="is-size-6-mobile">
													Generate
												</p>
											</button>
										</div>
										{/* End of Input for Submit button */}
									</div>
								</div>
							</section>
						</form>
					</section>
					{/* End of Input form */}
				</div>
			</section>
			{/* End of main section */}

			{/* Footer */}
			<footer class="footer">
				<div class="content has-text-centered">
					<p>
						Made with{" "}
						{
							<span role="img" aria-label="coffee">
								☕
							</span>
						}
					</p>
					<p>
						See the source code on
						<a href="https://github.com/matthuynh/url-shortener">
							{" "}
							GitHub
						</a>
						.
					</p>
				</div>
			</footer>
		</main>
	);
}

export default FormComponent;

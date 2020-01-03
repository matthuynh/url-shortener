import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

function FormComponent(props) {
	return (
		<main>
			{/* Main section */}
			<section class="section">
				<div class="container">
					{/* Page logo and title */}
					<section class="section" id="title-section">
						<h1 class="title has-text-centered"> Shrinkly </h1>
						{/* <h6 class="subtitle is-6 has-text-centered">
							{" "}
							a URL shortener{" "}
						</h6> */}
					</section>
					{/* End of page logo and title */}

					{/* Input form */}
					<section class="section">
						<form>
							<section class="section">
								<div class="container">
									<div class="columns is-mobile is-gapless">
										{/* Left column */}
										<div class="column is-9">
											{/* Textfield input for long URL */}
											<input
												class="input is-primary is-medium is-small-mobile"
												type="text"
												name="longURL"
												placeholder="Enter a URL to shrink"
												value={props.data.longURL}
												onChange={props.handleChange}
											/>
											<nav class="level is-mobile">
												{/* Checkbox input for custom short URL textfield */}
												<div class="level-left">
													<label class="checkbox">
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
														/>{" "}
														Custom URL
													</label>
												</div>
												{/* Checkbox input for "Preview" option */}
												<div class="level-right">
													<label class="checkbox">
														Preview
														{"  "}
														<input
															type="checkbox"
															name="usePreview"
															onChange={
																props.handleChange
															}
															checked={
																props.data
																	.usePreview
															}
														/>
													</label>
												</div>
											</nav>
										</div>
										{/* End of left column for main textfield and extra options */}
										{/* Start of right column for Submit button */}
										<div class="column is-3">
											<button
												class="button is-primary is-medium is-fullwidth"
												type="button"
												onClick={props.handleSubmit}
											>
												<p class="is-size-6-mobile">
													Shrink!
												</p>
											</button>
										</div>
										{/* End of right column for Submit button */}
									</div>
								</div>
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
										<br />
									</p>
									<p class="control is-fullwidth is-expanded">
										<input
											class="input is-small is-expanded is-fullwidth"
											type="text"
											name="customShortURL"
											placeholder="<insert custom URL>"
											value={props.data.customShortURL}
											onChange={props.handleChange}
											style={{
												display:
													!props.data
														.useCustomShortURL &&
													"none"
											}}
										/>
									</p>
								</div>
								{/* End of textfield input for "Use Custom Short URL" option */}
								{/* Info box that displays custom URL specifications */}
								<div
									class="notification"
									id="custom-url-notification"
									style={{
										display:
											!props.data.useCustomShortURL &&
											"none"
									}}
								>
									<p>
										Your custom URL must have a length
										between 4 to 20, inclusive, and contain
										at least 4 alphanumeric characters (a-z,
										A-Z, 0-9).
									</p>

									<p>
										{" "}
										Example:{" "}
										<a href="https://localhost:3000/helloworld">
											https://localhost:3000/helloworld
										</a>
									</p>
								</div>
								{/* End of info box that displays custom URL specifications */}
								{/* Info box that explains what Preview is */}
								<div
									class="notification"
									id="preview-notification"
									style={{
										display:
											!props.data.usePreview && "none"
									}}
								>
									<p>
										Users will be re-directed to an
										intermediary landing page that displays
										the designated long URL. This gives
										users peace of mind as they can verify
										the URL before continuing.
									</p>
									<p>
										{" "}
										Example:{" "}
										<a href="https://localhost:3000/preview/helloworld">
											https://localhost:3000/preview/helloworld
										</a>
									</p>
								</div>
								{/* End of info box that explains what Preview is */}
							</section>
						</form>
					</section>
					{/* End of Input form */}
				</div>
			</section>
			{/* End of main section */}
			{/* Footer */}
			<footer class="footer content has-text-centered">
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
				</p>
			</footer>
		</main>
	);
}

export default FormComponent;

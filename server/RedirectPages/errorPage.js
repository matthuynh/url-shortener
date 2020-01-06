import React from "react";

const config = require("config");
const baseUrl = config.get("baseUrl");

class Error extends React.Component {
	render() {
		return (
			<main>
				<div>
					{/* 404 Section */}
					{this.props.error && (
						<section className="section">
							<div
								className="container has-text-centered is-desktop"
								style={{
									padding: "10rem 2rem 4rem 2rem"
								}}
							>
								{/* 404 text box */}
								<div className="notification is-warning">
									<h2 className="content is-medium">
										UH OH, 404 error. This page does not
										exist.
									</h2>
								</div>
								{/* 'Go back' button */}
								<button
									className="button is-primary"
									type="button"
								>
									<a href={baseUrl}
                  style={{
                    color: "#ffffff"
                  }}> Go to Shrinkly home </a>
								</button>
							</div>
						</section>
					)}
					{/* End of 404 section */}
					{/* Redirect section */}
					{!this.props.error && (
						<section className="section">
							<div
								className="container has-text-centered is-desktop"
								style={{
									padding: "10rem 2rem 4rem 2rem"
								}}
							>
								<div className="notification">
									<h2 className="content is-medium is-primary">
										You are being redirected to{" "}
										<a
											href={this.props.shortUrl}
											style={{
												textDecoration: "none",
												color: "#0000EE"
											}}
										>
											{" "}
											{this.props.shortUrl}
										</a>
									</h2>
									<p>
										You may click on the link above to
										continue. If the link looks <i>suspicious</i>,
										then be careful!
									</p>
								</div>
							</div>
						</section>
					)}
					{/* End of redirect section */}
					{/* Footer */}
					<footer className="footer content has-text-centered">
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
				</div>
			</main>
		);
	}
}

export default Error;

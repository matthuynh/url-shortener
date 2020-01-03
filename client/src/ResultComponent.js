import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

// If the user provided a valid long URL, displays the short URL. Otherwise, prompts user to try again.
function ResultComponent(props) {
	let displayText = props.data.shortURL
		? "Your short URL is " + props.data.shortURL
		: props.data.resultErrorMessage;

	return (
		<main>
			{/* Main section */}
			<section class="section">
				<div
					class="container has-text-centered is-desktop"
					id="result-main"
				>
					{/* Beginning of main text container */}
					<div
						class={
							"notification " +
							(props.data.shortURL ? "is-primary" : "is-warning")
						}
					>
						<p class="content is-medium"> {displayText} </p>
					</div>
					{/* End of text container */}

					{/* Beginning of form */}
					<form>
						<div class="buttons are-medium is-centered">
							{/* Copy to Clipboard button */}
							<CopyToClipboard text={props.data.shortURL}>
								<button
									class="button"
									type="button"
									style={{
										display: !props.data.shortURL && "none"
									}}
									onClick={props.handleClickCopy}
								>
									Copy to Clipboard
								</button>
							</CopyToClipboard>

							{/* 'Go back' button */}
							<button
								class="button"
								type="button"
								onClick={props.handleReturnToHome}
							>
								Go back
							</button>
						</div>
					</form>
					{/* End of form */}

					{/* Alerts user they have copied to clipboard */}
					<br />
					<div>
						<p
							class="content"
							style={{
								display:
									!props.data.hasCopiedToClipboard && "none"
							}}
						>
							Successfully copied to clipboard!
						</p>
					</div>
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

export default ResultComponent;

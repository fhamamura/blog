import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";

function Home() {
	return (
		<>
			<div className="container">
				{/* Start Nav */}
				<Nav />
				{/* End Nav */}

				{/* Start Header */}
				<Header />
				{/* End Header */}

				<main className="container">
					<div className="row g-5">
						<div className="col-md-12">
							<article className="blog-post">
								<h2 className="display-5 link-body-emphasis mb-1">
									Sample blog post
								</h2>
								<p>
									This is some additional paragraph
									placeholder content. It has been written to
									fill the available space and show how a
									longer snippet of text affects the
									surrounding content. We'll repeat it often
									to keep the demonstration flowing, so be on
									the lookout for this exact same string of
									text.
								</p>
							</article>

							<article className="blog-post">
								<h2 className="display-5 link-body-emphasis mb-1">
									Another blog post
								</h2>
								<p>
									This is some additional paragraph
									placeholder content. It has been written to
									fill the available space and show how a
									longer snippet of text affects the
									surrounding content. We'll repeat it often
									to keep the demonstration flowing, so be on
									the lookout for this exact same string of
									text.
								</p>
								<blockquote>
									<p>
										Longer quote goes here, maybe with some{" "}
										<strong>emphasized text</strong> in the
										middle of it.
									</p>
								</blockquote>
								<p>
									This is some additional paragraph
									placeholder content. It has been written to
									fill the available space and show how a
									longer snippet of text affects the
									surrounding content. We'll repeat it often
									to keep the demonstration flowing, so be on
									the lookout for this exact same string of
									text.
								</p>
								<p>
									And don't forget about tables in these
									posts:
								</p>
								<p>
									This is some additional paragraph
									placeholder content. It's a slightly shorter
									version of the other highly repetitive body
									text used throughout.
								</p>
							</article>

							<article className="blog-post">
								<h2 className="display-5 link-body-emphasis mb-1">
									Sample blog post
								</h2>
								<p>
									This is some additional paragraph
									placeholder content. It has been written to
									fill the available space and show how a
									longer snippet of text affects the
									surrounding content. We'll repeat it often
									to keep the demonstration flowing, so be on
									the lookout for this exact same string of
									text.
								</p>
							</article>

							<article className="blog-post">
								<h2 className="display-5 link-body-emphasis mb-1">
									Another blog post
								</h2>
								<p>
									This is some additional paragraph
									placeholder content. It has been written to
									fill the available space and show how a
									longer snippet of text affects the
									surrounding content. We'll repeat it often
									to keep the demonstration flowing, so be on
									the lookout for this exact same string of
									text.
								</p>
								<blockquote>
									<p>
										Longer quote goes here, maybe with some{" "}
										<strong>emphasized text</strong> in the
										middle of it.
									</p>
								</blockquote>
								<p>
									This is some additional paragraph
									placeholder content. It has been written to
									fill the available space and show how a
									longer snippet of text affects the
									surrounding content. We'll repeat it often
									to keep the demonstration flowing, so be on
									the lookout for this exact same string of
									text.
								</p>
								<p>
									And don't forget about tables in these
									posts:
								</p>
								<p>
									This is some additional paragraph
									placeholder content. It's a slightly shorter
									version of the other highly repetitive body
									text used throughout.
								</p>
							</article>
						</div>
					</div>
				</main>

				{/* Start Footer */}
				<Footer />
				{/* End Footer */}
			</div>
		</>
	);
}

export default Home;

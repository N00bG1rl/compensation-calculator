import sideImage from './assets/Image.png'

function App() {
	return (
		<div className='container'>
			<article className='content'>
				<header>
					<h1>Quam Tristique Condimentum</h1>
					<p>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
						eget lacinia odio sem nec elit. Cum sociis natoque penatibus et
						magnis dis parturient montes, nascetur ridiculus mus.{' '}
						<button className='textLink'>Curabitur blandit</button> tempus
						porttitor. Integer posuere erat a ante venenatis dapibus posuere
						velit aliquet. Vestibulum id ligula porta felis euismod semper.
					</p>
				</header>

				<section>
					<article className='sideImageContent'>
						<div>
							<h2>Fringilla Euismod Adipiscing Ipsum</h2>
							<p>
								Cum sociis natoque penatibus et magnis dis parturient montes,
								nascetur ridiculus mus. Maecenas faucibus mollis interdum.
								Aenean lacinia bibendum nulla sed.
							</p>
						</div>

						<img src={sideImage} className='sideImage' alt='' />
					</article>

					<ul>
						<li>Tellus Ullamcorper Inceptos</li>
						<li>
							Magna Condimentum
							<ul>
								<li>Mattis Tristique</li>
								<li>Pharetra Pellentesque Dapibus</li>
							</ul>
						</li>
						<li>Aenean Inceptos</li>
						<li>Parturient Bibendum</li>
					</ul>
				</section>
			</article>
		</div>
	)
}

export default App

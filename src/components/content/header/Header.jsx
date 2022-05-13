import styles from './Header.module.css'

function Header() {
	return (
		<header>
			<h1>Quam Tristique Condimentum</h1>
			<p>
				Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
				lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis
				parturient montes, nascetur ridiculus mus.
				<button className={styles.textLink}>Curabitur blandit</button> tempus
				porttitor. Integer posuere erat a ante venenatis dapibus posuere velit
				aliquet. Vestibulum id ligula porta felis euismod semper.
			</p>
		</header>
	)
}

export default Header

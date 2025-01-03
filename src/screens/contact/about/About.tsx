import { FC } from 'react'
import styles from './About.module.scss'
import ContactTabs from '../tabs/ContactTabs'
import Image from 'next/image'

const About: FC = () => {
	return (
		<div className={styles.about}>
			<h2>About us</h2>
			<ContactTabs />
			<div className={styles.content}>
				<Image src='/Rectangle 38.png' alt='post' width={1600} height={800} />
				{[...Array(3)].map((_, index) => (
					<div className={styles.item} key={index}>
						<h2>About us</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
							inventore veniam animi cupiditate dolore. Commodi accusantium enim
							quidem at maxime reiciendis, officiis est a itaque, dolores veniam
							laborum fugiat distinctio. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Placeat voluptates et architecto officiis. Nobis
							quam atque dolorem possimus in doloribus nam voluptatibus quidem,
							voluptas quibusdam totam perferendis laborum assumenda iure. Lorem
							ipsum dolor sit amet consectetur adipisicing elit. Quas, error
							beatae laboriosam nulla iure asperiores odit reiciendis quibusdam
							cumque vero repudiandae adipisci eius dignissimos modi at rem
							architecto. Iste, ad.
						</p>
					</div>
				))}
			</div>
		</div>
	)
}
export default About

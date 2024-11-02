import Layout from '@/components/layout/Layout'
import PopularPost from '@/components/popular-post/PopularPost'
import { FC } from 'react'
import styles from './Home.module.scss'
const Home: FC = () => {
	return (
		<Layout>
			<div className={styles.home}>
				<PopularPost />
			</div>
		</Layout>
	)
}

export default Home

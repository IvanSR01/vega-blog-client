'use client'

import SideBar from '@/components/side-bar/SideBar'
import Button from '@/shared/ui/button/Button'
import Input from '@/shared/ui/input/Input'
import Textarea from '@/shared/ui/textarea/Textarea'
import Link from 'next/link'
import { FC } from 'react'

import ContactTabs from '../tabs/ContactTabs'
import styles from './Contact.module.scss'
import { useSendMail } from './useSendMail'

const Contact: FC = () => {
	const { register, onSubmit, errors } = useSendMail()
	return (
		<div className={styles.contact}>
			<h2>Contact us</h2>
			<ContactTabs />
			<SideBar>
				<div className={styles.content}>
					<div className={styles.heading}>Get In Touch</div>
					<div className={styles.text}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
						impedit eligendi in ducimus laboriosam perspiciatis? Illum
						consequatur ea cumque, molestiae quod provident, placeat, labore
						laborum doloribus quam laboriosam illo perferendis.
					</div>
					<div className={styles.items}>
						<div className={styles.item}>
							<h3>Address</h3>
							<p>
								1328 Oak Ridge Drive, Saint Louis, <br /> Missouri - 63102
							</p>
						</div>
						<div className={styles.item}>
							<h3>Phone</h3>
							<p>+1 123 456 7890</p>
						</div>
					</div>
					<div className={styles.contactForm}>
						<form onSubmit={onSubmit}>
							<div className={styles.formGroup}>
								<Input
									{...register('name', {
										required: 'Name is required'
									})}
									error={!!errors.name?.message}
									helperText={errors.name?.message as string}
									type='text'
									placeholder='Your Name'
								/>
								<Input
									{...register('to', {
										required: 'Email is required'
									})}
									error={!!errors.to?.message}
									helperText={errors.to?.message as string}
									type='email'
									placeholder='Your email'
								/>
							</div>
							<Input
								{...register('subject', {
									required: 'Subject is required'
								})}
								error={!!errors.subject?.message}
								helperText={errors.subject?.message as string}
								type='text'
								placeholder='Subject'
							/>
							<Textarea
								{...register('message', {
									required: 'Message is required'
								})}
								error={!!errors.message?.message}
								helperText={errors.message?.message as string}
								placeholder='Write your message...'
							/>
							<p className={styles.privacyText}>
								We care about your data in our{' '}
								<Link href='/privacy-policy'>Privacy Policy</Link>
							</p>
							<Button>Send message</Button>
						</form>
					</div>
				</div>
			</SideBar>
		</div>
	)
}

export default Contact

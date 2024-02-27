import hero from '../public/images/illustration-article.svg';
import imgAvatar from '../public/images/image-avatar.webp';
import './App.css';
import { Card, Typography } from 'antd';

const { Text } = Typography;
const { Meta } = Card;

function App() {
	return (
		<main className="container">
			<Card
				style={{ width: '375px', padding: '20px', textAlign: 'left' }}
				cover={<img src={hero} alt="illustration hero" />}
			>
				<Meta
					style={{ padding: '0px' }}
					title={
						<div style={{ marginTop: '20px' }}>
							<Text
								style={{
									backgroundColor: 'hsl(47, 88%, 63%)',
									padding: '5px 10px ',
									borderRadius: '5px',
								}}
							>
								Learning
							</Text>
							<p style={{ fontSize: '13px', fontWeight: 'bold' }}>
								Published 21 Dec 2023
							</p>
							<Text
								style={{
									fontWeight: '800',
									fontSize: '20px',
								}}
							>
								HTML & CSS foundations
							</Text>
						</div>
					}
					description={
						<p style={{ fontWeight: 'bold' }}>
							These languages are the backbone of every website,
							defining structure, content, and presentation.
						</p>
					}
				/>
				<section className="section">
					<img src={imgAvatar} alt="greg" />
					<div>
						<Text>Greg Hooper</Text>
					</div>
				</section>
			</Card>
		</main>
	);
}

export default App;

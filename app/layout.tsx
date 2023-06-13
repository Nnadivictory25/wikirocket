import Navbar from './components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'WikiRocket',
	description: 'Wiki Rocket website',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className + 'text-black'}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}

import Head from 'next/head';
import Header from "../components/Header/Header";

export default function Home() {
	return (
		<>
		<Header />
			<h1>Homepage</h1>
			<p>Hello World</p>
		</>
	);
}

import Image from 'next/image';
import Logo from "../../assets/images/Logo.png";
import SignInIcon from "../../assets/icons/sign-in-icon.png";
import CartIcon from "../../assets/icons/cart-icon.png";


export default function Header() {
	return (
		<header className="max-w-7xl h-24 shadow-sm pt-10 pb-10">
			<div className="ml-8 inline">
				<Image src={Logo} alt="Lexir Brand"/>
			</div>
			<div className="space-x-10 mr-8 float-right text-sm">
				<a href="/">PRODUCTS</a>
				<a href="/">BRANDS</a>
				<a href="/"><span className="w-6 h-6 mr-2 align-middle"><Image src={SignInIcon} alt="sign in"/></span>SIGN IN</a>
				<a href="/"><span className="w-6 h-6 mr-2 align-middle"><Image src={CartIcon} alt="sign in"/></span>CART</a>

			</div>

		</header>
	);
}

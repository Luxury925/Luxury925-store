import { motion } from 'framer-motion';
import { Instagram, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navLinks = [
		{ name: 'Home', href: '#home' },
		{ name: 'Collection', href: '#products' },
		{ name: 'About', href: '#about' },
		{ name: 'Journal', href: '#blog' },
		{ name: 'Contact', href: '#footer' },
	];

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
			<div className="container mx-auto px-6">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<motion.a
						href="#home"
						className="font-heading text-2xl md:text-3xl tracking-widest text-foreground"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6 }}
					>
						<span className="text-gradient-gold">LUXURY</span>925
					</motion.a>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-10">
						{navLinks.map((link, index) => (
							<motion.a
								key={link.name}
								href={link.href}
								className="text-xs font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
							>
								{link.name}
							</motion.a>
						))}
					</nav>

					{/* Social & Mobile Menu */}
					<div className="flex items-center gap-4">
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors duration-300"
						>
							<Instagram className="w-5 h-5" />
						</a>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="md:hidden text-foreground"
						>
							{isMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<motion.nav
						className="md:hidden py-6 border-t border-border/50"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
					>
						<div className="flex flex-col gap-4">
							{navLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									onClick={() => setIsMenuOpen(false)}
									className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
								>
									{link.name}
								</a>
							))}
						</div>
					</motion.nav>
				)}
			</div>
		</header>
	);
};

export default Header;

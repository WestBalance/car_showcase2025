import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';

const NavBar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__container">
        <Link href="/" className="navbar__logo-link">
          <Image 
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="navbar__logo"
          />
        </Link>

        <CustomButton 
          title="Sign In"
          btnType="button"
          containerStyles="navbar__button"
        />
      </nav>
    </header>
  )
}

export default NavBar;

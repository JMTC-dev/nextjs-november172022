import Link from 'next/link';
import AuthButton from '../../buttons/auth-button/AuthButton';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between ${className}`}
    >
      <div className="space-x-5 m-5">
        <Link href="/">
          <span className="hover:underline">About</span>
        </Link>
        <Link href="/">
          <span className="hover:underline">Store</span>
        </Link>
      </div>
      <div className="space-x-5 m-5">
        <Link href="/">
          <span className="hover:underline hidden sm:inline">Gmail</span>
        </Link>
        <Link href="/">
          <span className="hover:underline hidden sm:inline">Images</span>
        </Link>
        <AuthButton />
      </div>
    </header>
  );
};

export default Header;

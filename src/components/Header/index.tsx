import Image from 'next/image';

import SignInButton from '../SignInButton';
import styles from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Logo ig.news" />
        <nav>
          <a className={styles.active} href="/">Home</a>
          <a href="/">Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}

export default Header;

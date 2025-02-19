import githubLogo from '@/assets/github.svg';

const Header = () => {
  return (
    <div className='flex gap-4 items-center justify-center'>
      <img src={githubLogo.src} className='w-8 h-8' />
      <span>GitHub Repository Finder</span>
    </div>
  );
};

export default Header;

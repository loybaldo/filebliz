import { useLayoutEffect, useState } from 'react';
import "./theme-switcher.scss"
import Button from '../../common/button';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    const localThemeValue = window.localStorage.getItem('theme');
    return localThemeValue !== null ? localThemeValue : null;
  });

  useLayoutEffect(() => {
    if (theme !== null) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);

    window.localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const iconClassName = theme === 'dark' ? 'fa-solid fa-sun-bright' : 'fa-solid fa-moon';

  return (
    <Button classItem="ctrl" onclick={toggleTheme}>
      <i className={iconClassName}></i>
    </Button>
  );
}

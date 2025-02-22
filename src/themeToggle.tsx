import darkSvg from '/dark.svg';
import lightSvg from '/light.svg';
import systemDarkSvg from '/systemDark.svg';
import systemLightSvg from '/systemLight.svg';
import { useStoredState } from './storedState';
import { useMedia } from 'react-use';
import { useEffect } from 'react';

enum Theme {
  Light = 'light',
  Dark = 'dark',
  System = 'system'
}

export const ThemeToggle = () => {
  const [theme, setTheme] = useStoredState<Theme>('theme', Theme.System);
  const systemDarkMode = useMedia('(prefers-color-scheme: dark)');

  const cycleTheme = () => {
    console.log('current theme: ', theme);
    switch (theme) {
      case Theme.Light:
        setTheme(Theme.Dark);
        break;
      case Theme.Dark:
        setTheme(Theme.System);
        break;
      case Theme.System:
        setTheme(Theme.Light);
        break;
    }
  };

  useEffect(() => {
    if (theme === Theme.Dark || (theme === Theme.System && systemDarkMode)) {
      console.log('set theme to dark');
      document.getElementById('root')?.classList.add('dark');
    } else {
      console.log('set theme to light');
      document.getElementById('root')?.classList.remove('dark');
    }
  });

  const svg = theme === Theme.Dark ? darkSvg : theme === Theme.Light ? lightSvg : systemDarkMode ? systemDarkSvg : systemLightSvg;

  return (
    <div className="flex justify-center">
      <button className="w-6 h-6 font-bold flex text-xl items-center justify-center rounded-sm" onClick={cycleTheme}>
        <img src={svg}></img>
      </button>
    </div>
  );
};

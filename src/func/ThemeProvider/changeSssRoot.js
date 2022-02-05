export function changeCssRootVariables(theme) {
  const root = document.querySelector(':root');

  const components = ['background', 'button', 'buttonToNext', 'textColor', 'themeChanger'];

  components.forEach((component) => {
    root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`);
  });
}

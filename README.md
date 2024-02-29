# Trying to Implement Theme Switcher and Font Switcher in React with Styled components

This is a simple project to implement Theme Switch and Font Switch.

- For Theme Switch, I have used Context API to provide the theme to the entire app.
--- ThemeContext.js : This file includes the Theme Provider
--- ThemeToggleButton : This file includes the button to toggle the theme. This is present in the Header.js file

- Similarly, for Font Switch, we have dropdown menu with 3 options (serif, san serif and mono) to switch the font of all the content.
--- FontSwitcher.js : This includes the code to switch the fonts.
--- FontSelector.js : This includes the code for the dropdown menu. I have included this in the Header.js file as well.

MainContent.js and Para.js are some dummy components with some text in them.

# Problem

I am unable to switch the theme or the font when I include the respective buttons in the header file. 
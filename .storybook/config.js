import { configure, setAddon, addDecorator } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import JSXAddon from 'storybook-addon-jsx';

addDecorator(withBackgrounds([{ name: 'none', value: 'transparent', default: true }]));

setAddon(JSXAddon);

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

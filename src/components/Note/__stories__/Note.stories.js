import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withViewport } from '@storybook/addon-viewport';

import Note from '../index';
import Editable from '../../Editable';

storiesOf('Note', module)
  .addDecorator(withViewport())
  .addWithJSX(`default`, () => (
    <Note>
      <Editable id="1" editing="true" value="new task" onEdit={action('button-click')} />
    </Note>
  ))
  .add(
    'tablet',
    () => (
      <Note>
        <Editable id="1" editing="true" value="new task" onEdit={action('button-click')} />
      </Note>
    ),
    {
      viewport: 'ipad'
    }
  )
  .add(
    'mobile',
    () => (
      <Note>
        <Editable id="1" editing="true" value="new task" onEdit={action('button-click')} />
      </Note>
    ),
    {
      viewport: 'iphone8p'
    }
  );

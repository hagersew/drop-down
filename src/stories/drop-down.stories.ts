import { StoryFn, moduleMetadata } from '@storybook/angular';
import type { Meta } from '@storybook/angular';

import { DropDownComponent } from '../app/shared/components/drop-down/drop-down.component';

export default {
  title: 'Component/Dropdown',
  component: DropDownComponent,
} as Meta;

const Template: StoryFn<DropDownComponent> = (args: DropDownComponent) => ({
  props: args,
});

export const dropdown = Template.bind({});
dropdown.args = {
  options: [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
    { id: 4, name: 'Option 4' },
    { id: 5, name: 'Option 5' },
    { id: 6, name: 'Option 6' },
    { id: 7, name: 'Option 7' },
    { id: 8, name: 'Option 8' },
    { id: 9, name: 'Option 9' },
    { id: 10, name: 'Option 10' },
    { id: 11, name: 'Option 11' },
  ],
};

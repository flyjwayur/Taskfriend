import uuid from 'uuid';

const notes = [
  {
    id: uuid.v4(),
    task: 'BrainStorm task by drawing, writing',
  },
  {
    id: uuid.v4(),
    task: 'Create Kanban',
  },
];

export default notes;

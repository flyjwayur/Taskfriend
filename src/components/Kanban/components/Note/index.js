import React from 'react';
import { compose } from 'redux';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from '../../constants/itemTypes';
import './styles.scss';

const Note = ({
  connectDragSource,
  connectDropTarget,
  onMoveNoteBetweenLanes,
  id,
  children,
  ...props
}) => {
  return compose(
    connectDragSource,
    connectDropTarget
  )(
    <div className="note" {...props}>
      {children}
    </div>
  );
};

const noteSource = {
  beginDrag(props) {
    console.log('begin dragging note', props.id);
    return { id: props.id };
  }
};

const noteTarget = {
  hover(targetProps, monitor) {
    const targetId = targetProps.id;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;
    if (sourceId !== targetId) {
      targetProps.onMoveNoteBetweenLanes({ sourceId, targetId });
    }
    console.log('dragging note', sourceProps, targetProps);
  }
};

export default compose(
  DragSource(ItemTypes.NOTE, noteSource, connect => ({
    connectDragSource: connect.dragSource()
  })),
  DropTarget(ItemTypes.NOTE, noteTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }))
)(Note);

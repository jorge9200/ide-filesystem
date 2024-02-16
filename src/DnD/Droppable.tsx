import React from 'react';
import {useDroppable} from '@dnd-kit/core';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';

export const Droppable = (props) => {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
    data: {
        node: props.data,
    }
  });

  return (
    <Box ref={setNodeRef} sx={{ bgcolor: isOver ? grey[400]: '' }}>
      {props.children}
    </Box>
  );
}
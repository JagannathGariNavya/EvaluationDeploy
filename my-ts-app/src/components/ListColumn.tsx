import React from 'react';
import { List, Card } from '../types/trello';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import CardItem from './CardItem';
interface ListColumnProps {
  list: List;
  cards: Card[];
}

const ListColumn: React.FC<ListColumnProps> = ({ list, cards }) => {
  return (
    <div className="list-column">
      <h4>{list.name}</h4>
      <Droppable droppableId={list.id}>
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {cards.map((card, index) => (
              <Draggable key={card.id} draggableId={card.id} index={index}>
                {provided => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <CardItem card={card} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ListColumn;

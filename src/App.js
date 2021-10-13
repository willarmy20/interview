import './App.css';

// You start with an array of 4 possible menu time slots.
//  Draw a UI of 4 columns, one for each time slot. 
// You also start with a set of 4 menu objects. 
// Draw a card for each menu. In each menu card, draw its title,
//  and below that, left/right buttons that move the menu card left/right 1 column.

// Use the useState hook to keep track of the menus and what slot they are currently in.
// Use flexbox CSS to make the columns.
// If you have extra time, handle the ‘left’ button on a card in the leftmost menu, and the ‘right’ button on a card in the rightmost menu. Maybe cards wrap around, maybe those buttons are disabled, or maybe there’s a more interesting solution.


const timeSlots = ['breakfast', 'lunch', 'afternoon tea', 'dinner'];


// const initialMenus = [
//     {
//         id: 1,
//         title: 'Tasty Pancakes',
//         timeSlot: 'breakfast'
//     },
//     {
//         id: 2,
//         title: 'Waffles',
//         timeSlot: 'breakfast'
//     },
//     {
//         id: 3,
//         title: 'Yummy Sandwiches',
//         timeSlot: 'lunch'
//     },
//     {
//         id: 4,
//         title: 'Delicious Pizza',
//         timeSlot: 'dinner'
//     }
// ];


function Card(){

  return(
      <div className="items">
      {timeSlots.map(slots => {
      return slots
      })}
      </div>
  )
};

function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;

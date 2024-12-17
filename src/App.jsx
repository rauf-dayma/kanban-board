import React from 'react';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import store from './redux/store';
import KanbanBoard from './components/KandBoard.jsx';
import './components/styles.css';

function App() {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <div className="app-container">
          <header className="app-header">
            <h1 className="app-title">Kanban Board</h1>
          </header>
          <main className="app-main">
            <KanbanBoard />
          </main>
        </div>
      </DndProvider>
    </Provider>
  );
}

export default App;

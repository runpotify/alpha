import AppBar from './component/appBar';

function View() {
  return (
    <div className="View">
      <header className="App-header">
        <AppBar/>
        <p>
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default View;

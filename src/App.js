import "./App.css";
const app = {
  title: "React Test crash course",
};
function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <h3 data-testId="title">{app.title}</h3>
      </div>
    </div>
  );
}

export default App;

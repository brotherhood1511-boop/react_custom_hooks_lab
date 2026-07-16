import Form from "./Form";
function App() {
  return (
    <div className="app-shell">
      <div className="card">
        <div className="app-header">
          <span className="app-icon">🛠️</span>
          <h2 className="app-title">Service Form</h2>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App

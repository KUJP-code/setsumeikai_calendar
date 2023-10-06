import Breadcrumb from "./Breadcrumb";

function App() {
  return (
    <>
      <nav>
        <Breadcrumb text="School List" to="/school_list" />
        <Breadcrumb text="Calendar" to="/calendar" />
        <Breadcrumb text="Form" to="/form" />
      </nav>
    </>
  );
}

export default App;

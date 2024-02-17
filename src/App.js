import "./App.css";
import Header from "./pages/Header";
import SearchHeader from "./pages/SearchHeader";
import HomePage from "./pages/HomePage";
import AddPostDiv from "./pages/AddPostDiv";
import { PostProvider } from "./PostProvider";

function App() {
  return (
    <>
      {/* Provide value to the clid component  */}
      <PostProvider>
        <Header>
          <SearchHeader />
          <AddPostDiv />
          <HomePage />
        </Header>
      </PostProvider>
    </>
  );
}

export default App;

import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Counter from "./components/main/Counter";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <Hero />
        <div className="counters padding-container">
          <Counter number="2K+" description="companies" />
          <Counter number="8" description="languages" />
          <Counter number="1.2M" description="leads" />
        </div>
      </div>

      <Main />
      <Footer />
    </div>
  );
}

export default App;

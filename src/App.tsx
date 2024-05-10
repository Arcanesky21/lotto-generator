import './App.css'
import Card from "./components/card.tsx";

function App() {

  return (
    <>
      <div className="bg-[#042a2f] text-[#f0fdfc] min-h-screen w-full flex flex-col items-center p-5 ">
          <header className="font-bold text-2xl">Lotto Generator jm</header>
          <Card/>
      </div>
    </>
  )
}

export default App

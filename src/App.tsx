import { DatePicker } from "./DatePicker";
import { useState } from "react";

function App() {
  const [date, setDate] = useState(() => new Date());

  return (
    <div className="App">
      <DatePicker value={date}/>
    </div>
  );
}

export default App;

import { useState } from "react";
import { SignInPage } from "./pages/SignInPage";
import { ChatPage } from "./pages/ChatPage";
import { Counter } from "./components/Counter";

function App() {
  const [ username, setUsername ] = useState('');
  function handleSubmit(username) {
    setUsername(username)
  }
   return (
    <div>
    <Counter initialValue={0} step={1.23} precision={4} />   
    {username === '' && <SignInPage  onSubmit={handleSubmit}/>}
    {username !== '' && <ChatPage /> }
    </div>
  );
}
export default App;

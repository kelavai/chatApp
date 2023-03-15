import { useState } from "react";
import { SignInPage } from "./pages/SignInPage";
import { ChatPage } from "./pages/ChatPage";
import { Counter } from "./components/Counter";

function App() {
  const [ username, setUsername ] = useState('');
  const [ avatarIndex, setAvatarIndex] = useState(0);
  function handleSubmit(user) {
    setUsername(user.username);
    setAvatarIndex(user.avatarIndex);
  }
   return (
    <div>
    <Counter initialValue={0} step={1.23} precision={4} />   
    {username === '' && <SignInPage  onSubmit={handleSubmit}/>}
    {username !== '' && <ChatPage username={username} avatarIndex={avatarIndex} /> }
    </div>
  );
}
export default App;

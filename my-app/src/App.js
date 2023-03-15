import { useContext } from "react";
import { SignInPage } from "./pages/SignInPage";
import { ChatPage } from "./pages/ChatPage";
import { AppContext } from "./contexts/AppContext";

function App() {
  const context = useContext(AppContext);
  
   return (
    <div>   
    {context.username === '' && <SignInPage />}
    {context.username !== '' && <ChatPage /> }
    </div>
  );
}
export default App;

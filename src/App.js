import { RecoilRoot } from "recoil";
import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    // Recoil使うときは、全体をRecoilRootで囲う
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}

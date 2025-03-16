import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Hackathon from "./pages/Hackathon";
import Schedule from "./pages/Schedule";
import { HackathonLayout } from "./components/HackathonLayout";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
    
          <Route
            path="/Schedule"
            element={
              <HackathonLayout>
                <Schedule />
              </HackathonLayout>
            }
          />
          
          <Route
            path="/"
            element={
              <HackathonLayout>
                <Hackathon />
              </HackathonLayout>
            }
          />
          
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
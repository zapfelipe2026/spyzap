import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AcessoVipzap from "./pages/AcessoVipzap";

/*
Design Philosophy: Cyberpunk Terminal / Hacker Aesthetic
- Dark theme with neon green accents
- Monospaced typography
- Scanline and glow effects
*/

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/acessoVipzap"} component={AcessoVipzap} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

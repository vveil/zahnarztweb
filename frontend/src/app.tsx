// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Suspense>
            {/* <Nav /> */}
            <div class="flex justify-center flex-1 w-screen font-source-sans">
              <div class="flex flex-col justify-between max-w-[1300px] w-full sm:mx-28 min-h-screen">
                <div class="w-full">
                  <Header className="pt-5 pb-12 sm:pt-20 sm:pb-28" />
                  {props.children}
                </div>
                <Footer className="mt-8 pb-8" />
              </div>
            </div>
          </Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}

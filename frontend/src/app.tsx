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
            <div class="font-source-sans flex w-screen flex-1 justify-center">
              <div class="flex min-h-screen w-full max-w-[1300px] flex-col justify-between lg:mx-28">
                <div class="w-full">
                  <Header className="pb-12 pt-5 lg:pb-28 lg:pt-20" />
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

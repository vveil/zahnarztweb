// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
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
            <div class="flex flex-col justify-between min-h-screen">
              <div>
                <Header className="mx-4 md:mx-16 md:mb-12" />

                {props.children}

              </div>
              <Footer className="mt-8 pb-8" />
            </div>
          </Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}

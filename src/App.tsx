import { useState } from "react";
import "./App.css";
import "remixicon/fonts/remixicon.css";
import Button from "./apple-design/Buttons/Button";

function App() {
    return (
        <>
            <div id="app">
                <nav id="navbar">
                    <div id="navbar-logo">Cyfroweszkoly</div>
                    <div id="navbar-actions">
                        <Button title="About" buttonType="text" />
                        <Button title="Recruitment" buttonType="text" />
                        <Button title="Log In" buttonType="primary" />
                    </div>
                </nav>
                <main id="main">
                    <div id="content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Similique veniam ipsa cumque fugiat ducimus
                            itaque impedit unde molestiae minima reiciendis,
                            culpa fugit minus animi aspernatur iusto tempora
                            saepe! Quaerat, sunt?
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;

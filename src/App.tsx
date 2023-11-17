import { useRef, useState } from "react";
import "./App.css";
import "remixicon/fonts/remixicon.css";
import Button from "./apple-design/components/Buttons/Button";
import MenuItem from "./apple-design/components/Menu/MenuItem";
import Menu from "./apple-design/components/Menu/Menu";

function App() {
    const ref = useRef();

    return (
        <>
            <div id="app">
                <nav id="navbar">
                    <div id="navbar-logo">Cyfroweszkoly</div>
                    <div id="navbar-actions">
                        <Button title="About" buttonType="text" />
                        <Button title="Recruitment" buttonType="text" />
                        <Button title="Log In" buttonType="primary" />
                        <Menu
                            options={[
                                {
                                    title: "Application",
                                    icon: <i className="ri-list-check" />,
                                },
                                {
                                    title: "Account",
                                    icon: <i className="ri-user-line" />,
                                },
                                {
                                    title: "Log Out",
                                    icon: (
                                        <i className="ri-logout-box-r-line" />
                                    ),
                                    color: "red",
                                },
                            ]}
                        >
                            <Button
                                title="Account"
                                id="account"
                                buttonType="primary"
                                trailingIcon={
                                    <i className="ri-arrow-down-s-fill"></i>
                                }
                            />
                        </Menu>
                    </div>
                </nav>
                <main id="main">
                    <div id="content">
                        <div className="scrollable">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Veritatis ducimus rerum totam.
                                Perspiciatis error nostrum vel voluptate
                                deserunt corporis aperiam, quod eos laborum,
                                maxime id veniam veritatis sequi quis quasi
                                autem neque! Error earum, qui nam cumque esse
                                atque eveniet repudiandae deleniti quidem ipsum
                                est ea repellat voluptatibus enim quos magni eos
                                exercitationem veritatis sequi obcaecati
                                voluptatem consectetur beatae culpa molestiae.
                                Maxime molestias, odio dolore officia aliquam
                                autem nemo, accusamus dolorum recusandae, sunt
                                obcaecati? Error temporibus voluptatem quod vero
                                cum! Molestias quia, porro sed libero qui
                                reiciendis minima voluptates ullam totam error
                                quo! Voluptatibus eaque, amet dolorum culpa,
                                dicta ea reiciendis aut atque saepe nihil facere
                                velit doloribus voluptatum voluptate quae, ex
                                sunt exercitationem qui ut cupiditate? Ullam
                                minima qui repellendus aut et, aliquid enim
                                rerum quidem. Veniam impedit quibusdam possimus,
                                aperiam beatae ea ullam nihil et deserunt eum
                                labore consectetur nisi magni iste cum qui,
                                commodi necessitatibus adipisci earum corporis
                                dolore magnam. Eaque pariatur quasi facere ab
                                blanditiis corrupti maxime fugiat at sapiente,
                                nisi obcaecati quos ratione consequuntur laborum
                                deleniti nesciunt error quis alias. Quisquam
                                dignissimos eius quas ipsa repellendus. Itaque
                                vero illo fuga, officia sed reiciendis quia,
                                neque, animi reprehenderit beatae aperiam
                                accusamus? Accusantium aperiam voluptate vel id,
                                itaque ipsa incidunt fugiat, ut ipsam est sed
                                harum quibusdam nemo, distinctio odit natus.
                                Quas aperiam sint ipsum quia ea impedit. Iusto,
                                beatae inventore saepe voluptatum laboriosam
                                esse! Deleniti a maxime ullam, neque dolorem
                                laudantium iste excepturi enim nihil eligendi,
                                odio mollitia. Rerum, reiciendis repellat
                                voluptatibus natus atque asperiores laboriosam.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;

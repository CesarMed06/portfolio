import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="navbar">
            <div className="navbar__container">
                <NavLink to="/" className="navbar__logo" onClick={closeMenu}>
                    César
                </NavLink>

                <button
                    className={`navbar__toggle ${isOpen ? "is-open" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Abrir menú"
                    aria-expanded={isOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`navbar__nav ${isOpen ? "is-open" : ""}`}>
                    <NavLink
                        to="/"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive ? "navbar__link active" : "navbar__link"
                        }
                        end
                    >
                        Inicio
                    </NavLink>

                    <NavLink
                        to="/trayectoria"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive ? "navbar__link active" : "navbar__link"
                        }
                    >
                        Trayectoria
                    </NavLink>

                    <NavLink
                        to="/proyectos"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive ? "navbar__link active" : "navbar__link"
                        }
                    >
                        Proyectos
                    </NavLink>

                    <NavLink
                        to="/tecnologias"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive ? "navbar__link active" : "navbar__link"
                        }
                    >
                        Tecnologías
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;

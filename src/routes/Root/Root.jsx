import { NavLink } from "react-router-dom";
import s from "./Root.module.css";

export const Root = () => {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <NavLink>Уход за лицом</NavLink>
                </li>
                <li>
                    <NavLink></NavLink>
                </li>
                <li>
                    <NavLink></NavLink>
                </li>
                <li>
                    <NavLink></NavLink>
                </li>
                <li>
                    <NavLink></NavLink>
                </li>
                <li>
                    <NavLink></NavLink>
                </li>
                <li>
                    <NavLink></NavLink>
                </li>
            </ul>
        </nav>
    </>
  );
};

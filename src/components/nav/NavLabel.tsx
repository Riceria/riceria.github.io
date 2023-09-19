import { INavLabel } from "../interfaces/INavLabel";

export function NavLabel ({text, menuID, isCurrentLabel, onClickLabel} : INavLabel) {
    return (
        <div className={`nav-label ${isCurrentLabel ? "nav-label-current" : "nav-label-sleep"}`}
            onClick={() => onClickLabel(menuID)}>
            {text}
        </div>
    );
}
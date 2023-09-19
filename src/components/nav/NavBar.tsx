import '../../styles/NavBar.css';
import { NavLabel } from "./NavLabel";
import { INavBar } from '../interfaces/INavBar';
import { useState } from 'react';

export function NavBar({onMenuSwap} : INavBar) {
    
    const [currentLabel, setCurrentLabel] = useState(0);

    const isCurrentLabel = (id: number) => {
        return currentLabel === id
    }

    const selectLabel = (id: number) => {
        setCurrentLabel(id);
        onMenuSwap(id);
    }

    return (
        <div className="nav-bar">
            <NavLabel
                text={"ABOUT"}
                menuID={0}
                isCurrentLabel={isCurrentLabel(0)}
                onClickLabel={selectLabel}
            />
            <NavLabel
                text={"PROJECTS"}
                menuID={1}
                isCurrentLabel={isCurrentLabel(1)}
                onClickLabel={selectLabel}
            />
            <NavLabel
                text={"DESIGN"}
                menuID={2}
                isCurrentLabel={isCurrentLabel(2)}
                onClickLabel={selectLabel}
            />
            <NavLabel
                text={"RESUME"}
                menuID={3}
                isCurrentLabel={isCurrentLabel(3)}
                onClickLabel={selectLabel}
            />
        </div>
    );
}

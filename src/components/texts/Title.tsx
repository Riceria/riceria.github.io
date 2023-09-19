import { IText } from "../interfaces/IText";
import '../../styles/Texts.css';

export function Title({text} : IText) {
    return (
        <div className="title-text">
            {text}
        </div>
    )
}
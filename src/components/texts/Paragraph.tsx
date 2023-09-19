import { IText } from "../interfaces/IText";
import '../../styles/Texts.css';

export function Paragraph({text} : IText) {
    return (
        <div className="paragraph-text">
            {text}
        </div>
    )
}
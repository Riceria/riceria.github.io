import { IText } from "../interfaces/IText";
import '../../styles/Texts.css';

function addLink({linkText, aLink} : IText) {
    return (
        <a href={aLink} target="_blank" rel="noreferrer">{linkText}</a>
    )
}

export function Paragraph({text, linkText, aLink} : IText) {
    if (linkText?.length === 0) {
        return (
            <div className="paragraph-text">
                {text}
            </div>
        )
    } else {
        return (
            <div className="paragraph-text">
                {text} {addLink({linkText, aLink})}
            </div>
        )
    }
}
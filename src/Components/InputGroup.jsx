import '/home/jitendra/my-project/cv-builder/src/Styles/App.css';

export default function InputGroup({ labelText, type, id, placeholder, value, onChange }) {

    return (
        <div className="input">
            <label id={id}><span className="label-text">{labelText}</span></label>
            {type === "textarea" ? 
            ( <textarea id={id} placeholder={placeholder} value={value} onChange={onChange}></textarea> ) 
            : ( <input id={id} placeholder={placeholder} value={value} onChange={onChange}></input> )}
        </div>
    )
}
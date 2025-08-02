export default function Button ({text , isDisabled, onClick}) {

    return (
        <button onClick={onClick} disabled={isDisabled}>
            {text}
        </button>
    )
}
export default function Counter ({value, isDanger}) {
    return (
        <p>
            {value} {isDanger ? "over limt" : ""}
        </p>
    )
}
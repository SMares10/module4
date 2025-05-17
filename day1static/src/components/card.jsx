



export default function Card({img, title, description}) {

    return (
            <>
                <img src = {img} />
                <h3>{title}</h3>
                <p> {description}</p>

            </>
    )
}
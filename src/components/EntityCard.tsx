import type { IProcessor } from "../types"

interface IProcessorCard extends IProcessor {}

export function ProcessorCard({
name,
type,
price,
instock,
power,
releaseDate,
rating,
}: IProcessorCard) {
    return (
        <article className="card">
            <div className="card__cover">
                {cover && (
                    <img 
                    src={API_URL + cover.url} 
                    alt={cover.alternativeText} 
                    />
                )}
                {/* <span>Название</span> */}
                {rating && <b className="card__rating">{rating}</b>}
            </div>

            <div className="card__body">
                <h3>{title}</h3>
                {/* <p className="card__meta">Жанр, год</p> */}
                {discription && (
                    <p className="card__desc">
                        {discription[0].children[0].text}
                    </p>
                )}
                <p className="card__platforms">Платформы</p>
            </div>

            <footer className="card__footer">
                <strong className={`${price === 0 ? "free" : ""}`}>
                    {price === 0 ? "Бесплатно" : price}
                </strong>
                <button className="link-btn">Удалить</button>
            </footer>
        </article>
    )
}
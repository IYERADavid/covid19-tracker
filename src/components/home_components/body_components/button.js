function Button({onview, text}){
    return (
        <>
            <button className="btn btn-dark" onClick={onview}>{text}</button>
        </>
    )
}

export default Button

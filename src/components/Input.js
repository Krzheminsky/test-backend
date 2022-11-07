const Input = ({
    type,
    value = '',
    placeholder = '',
    event,
}) => {

    return (
        <>
            <input
                id={type}
                className={type}
                placeholder={placeholder && placeholder}
                type={type}
                value={value && value}
                onClick={ type ==="submit" ? event : undefined }
                onChange={ type !== "submit" ? event : undefined }
            />
            {type === "checkbox" &&
            <label htmlFor={type}></label>}
        </>
    )
}

export { Input }

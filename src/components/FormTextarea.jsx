function FormTextarea({
    label,
    name,
    value,
    onChange,
}) {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>

            <textarea
                name={name}
                value={value}
                onChange={onChange}
                className="form-control"
                rows="5"
            />
        </div>
    )
}

export default FormTextarea
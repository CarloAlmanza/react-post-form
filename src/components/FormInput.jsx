function FormInput({
    label,
    name,
    value,
    onChange,
    type = 'text',
}) {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>

            <input
                type={type}
                name={name}
                value={type !== 'checkbox' ? value : undefined}
                checked={type === 'checkbox' ? value : undefined}
                onChange={onChange}
                className="form-control"
            />
        </div>
    )
}

export default FormInput
import { useState } from 'react'
import FormInput from './FormInput'
import FormTextarea from './FormTextarea'

const initialFormData = {
    author: '',
    title: '',
    body: '',
    public: false,
}

function PostForm() {
    const [formData, setFormData] = useState(initialFormData)

    function handleChange(e) {
        const { name, value, type, checked } = e.target

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const response = await fetch(
                'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                }
            )

            const data = await response.json()

            console.log('Post creato:', data)

            // reset form
            setFormData(initialFormData)

        } catch (error) {
            console.error('Errore nella chiamata POST:', error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <FormInput
                label="Autore"
                name="author"
                value={formData.author}
                onChange={handleChange}
            />

            <FormInput
                label="Titolo"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />

            <FormTextarea
                label="Contenuto"
                name="body"
                value={formData.body}
                onChange={handleChange}
            />

            <div className="form-check mb-4">
                <input
                    type="checkbox"
                    name="public"
                    checked={formData.public}
                    onChange={handleChange}
                    className="form-check-input"
                    id="public"
                />

                <label
                    htmlFor="public"
                    className="form-check-label"
                >
                    Pubblico
                </label>
            </div>

            <button className="btn btn-primary">
                Crea Post
            </button>
        </form>
    )
}

export default PostForm
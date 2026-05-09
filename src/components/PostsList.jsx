function PostsList({ posts }) {
    return (
        <>
            <h2 className="mb-4">
                Lista Posts
            </h2>

            <div className="row g-3">

                {posts.map(post => (
                    <div
                        key={post.id}
                        className="col-12"
                    >
                        <div className="card p-3">

                            <h4>{post.title}</h4>

                            <p>{post.body}</p>

                            <small>
                                Autore: {post.author}
                            </small>

                            <div className="mt-2">
                                {post.public ? (
                                    <span className="badge bg-success">
                                        Pubblico
                                    </span>
                                ) : (
                                    <span className="badge bg-secondary">
                                        Bozza
                                    </span>
                                )}
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default PostsList
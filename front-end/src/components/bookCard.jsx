export default function bookCard({book, onDelete}) {
    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
                <div className="flex justify-between items-start">
                    <span className="text-4xl">📖</span>
                    <div className="badge badge-ghost badge-sm">
                        #{book.id.slice(0, 8)}...
                    </div>
                </div>

                <h2 className="card-title">{book.titolo}</h2>

                <div className="space-y-1 text-sm">
                    <p></p>

                </div>
            </div>
        </div>
    )
}
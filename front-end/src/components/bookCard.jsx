export default function bookCard({book, onDelete}) {
    // mostro solo parte dell'id perché l'uuid4 è molto lungo ma viene cmq usato per cancellare il libro
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
                    <p className="flex items-center gap-2">
                        <span>👤</span>
                        <span className="text-base-content/70">{book.autore}</span>
                    </p >
                    <p>
                        <span>📅</span>
                        <span>{book.anno}</span>
                    </p>
                </div>

                <div className="card-actions justify-between items-center mt-4">
                    <div className="badge badge-primary">{book.genere}</div>
                </div>
            </div>
        </div>
    )
}
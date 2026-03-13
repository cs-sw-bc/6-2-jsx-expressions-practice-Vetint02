import { patron } from '../../data/data.js'


export default function Patrons() {
    return (
        <div>
            <div style={{ backgroundColor: '#0000009c', border: '2px solid', borderRadius: '8px', padding: '20px' }}>
                <h1>Patron Info</h1>
                <ul style={{ textAlign: 'left', lineHeight: '2' }}>
                    <li><b>Name: </b>{patron.firstName} {patron.lastName}</li>
                    <li><b>Email: </b>{patron.email.toLowerCase()}</li>
                    <li><b>Card Number: </b>{patron.libraryCardNumber}</li>
                </ul>
                <h2>{patron.isActive ? "✅ Active Member" : "❌ Inactive Memeber"}</h2>
            </div>
            {patron.isActive &&
                <div style={{ backgroundColor: '#0000009c', border: '2px solid', borderRadius: '8px', padding: '20px'}}>
                    <h1>Reading Goals</h1>
                    <div style={{backgroundColor: patron.booksReadThisYear >= patron.readingGoal ? 'Green' : 'yellow', lineHeight: '2'}}>
                        You've read <b>{patron.booksReadThisYear}</b> books this year!
                    </div>
                    {
                        patron.booksReadThisYear >= patron.readingGoal ? <div>🎯 Reading Goal Reached!</div> : <div><b>{patron.readingGoal - patron.booksReadThisYear}</b> more books to read to reach your yearly goal!</div>
                    }
                </div>
            }
            <div style={{ backgroundColor: '#0000009c', border: '2px solid', borderRadius: '8px', padding: '20px' }}>
                <h1>Overdue Books</h1>
                {
                    patron.hasLateFees &&
                    <div style={{ backgroundColor: '#ff00009c', borderRadius: '5px', lineHeight: '2' }}>
                        <h2><b>${patron.lateFeeAmount}</b> Overdue for late book returns</h2>
                    </div>
                }
                {
                    patron.booksCheckedOut.map((book) => (
                            <Books 
                                title = {book.title}
                                author = {book.title}
                                dueDate = {book.dueDate}
                                isOverdue = {book.isOverdue}
                            />
                        ))
                }
            </div>
        </div>
    )
}

function Books({title, author, dueDate, isOverdue}) {
    return (
        <div style={{display: 'block', margin: '5px auto', width: '500px', border: '2px solid', backgroundColor: '#00000083'}}>
            <h3>{title}</h3>
            <p>by {author}</p>
            <div style={{borderTop: '1px solid #eee', paddingTop: '10px'}}>
                <b>Due Date:</b> {dueDate}
            </div>
            {
                isOverdue &&
                <div style={{paddingBottom: '5px'}}>⚠️ OVERDUE</div>
            }
        </div>
    )
}
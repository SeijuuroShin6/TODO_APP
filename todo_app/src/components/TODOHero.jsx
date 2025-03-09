export default function TODOHero({todos_completed, total_todos}) {

    return (
        <section className="todo_section">
            <div>
                <p>Task Done</p>
                <p>Keep It Up</p>
            </div>
            <div>
                {todos_completed}/{total_todos}
            </div>
        </section>
    );
}

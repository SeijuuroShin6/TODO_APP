export default function Form({ setTodos })
    {
        const handleSubmit = (event) => {
            event.preventDefault();
            const value = event.target.todo.value;
            setTodos((prevTodos) => [
                ...prevTodos, {
                    title: value, id: self.crypto.randomUUID(), is_completed: false 
                },
            ]);
            event.target.reset();
        };
    
    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
              <input type="text" name="todo" id="todo" placeholder="Write your next task"/>
            </label>

            <button>
                <span className="visually-hidden">Submit</span>
                <img src="/plus.svg" height="20" width="20"/>
            </button>
        </form>
    );
    
    }

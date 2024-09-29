import { useState } from 'react';
import './App.css'; // Ensure your styles are correctly imported

// Helper function to generate random unique tasks
const generateRandomTasks = (numTasks) => {
  const taskNames = [
    "Complete Report",
    "Update Website",
    "Fix Bugs",
    "Write Documentation",
    "Team Meeting",
    "Client Presentation",
    "Design Review",
    "Code Refactoring",
    "Database Migration",
    "Deploy App",
  ];

  const taskDescriptions = [
    "This task involves writing a detailed report.",
    "Update the website with the latest content and design.",
    "Fix bugs in the system to improve stability.",
    "Write user-facing documentation for the new features.",
    "Attend a meeting to discuss project progress.",
    "Present the latest product to the client.",
    "Review the design and suggest improvements.",
    "Refactor the code for better performance.",
    "Migrate the database to the new server.",
    "Deploy the latest version of the app to production.",
  ];

  const tasks = [];
  const usedTaskIndices = new Set(); // Keep track of used indices
  let _id = 0; // Initialize ID for tasks

  while (tasks.length < numTasks) {
    const randomIndex = Math.floor(Math.random() * taskNames.length);
    if (!usedTaskIndices.has(randomIndex)) {
      usedTaskIndices.add(randomIndex); // Mark task as used
      tasks.push({
        name: taskNames[randomIndex],
        description: taskDescriptions[randomIndex],
        id: ++_id, // Increment ID for unique identification
      });
    }
  }

  return tasks;
};

function App() {
  // Generate random tasks between 1 to 5 tasks
  const [tasks, setTasks] = useState(generateRandomTasks(Math.ceil(Math.random() * 5)));

  // Handle task completion and remove the task from the list
  const handleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks); // Update the tasks state
  };

  return (
    <>
      <div className="header-container">
        <h1 className="header">Today's Mission</h1>
      </div>

      <div className="App">
        <div className="body-container">
          {/* Left section with task details */}
          <div className="left-section">
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <div className="today-task" key={task.id}>
                  <h2>{task.name}</h2>
                  <p>{task.description}</p>
                  <button
                    className="complete-task-button"
                    onClick={() => handleTaskCompletion(task.id)}
                  >
                    Completed Task
                  </button>
                </div>
              ))
            ) : (
              <p>No tasks left!</p> // Show message when no tasks remain
            )}
          </div>

          {/* Middle section (currently empty) */}
          <div className="middle-section"></div>
       <img
              width="285%"
              height="100%"
              src="https://64.media.tumblr.com/75a524b1f0602a25c68252eaa0609aae/c9a46006dfec030c-0f/s500x750/e35254989972e139522185aa295325b2fa5df6b8.pnj"
              alt="Task illustration"
              className="task-image"
            />

          {/* Right section with a button */}
          <div className="right-section">
            <button className="previou-day">Previous day</button>
            <button type="button" className="next day">
              Next day
            </button>
          </div>
        </div>

        {/* Footer with navigation */}
        <footer className="nav-bar" aria-label="Navigation Bar">
          <h3>Nav</h3>
          <ul>
            <li>Current Task</li>
            <li>Completed Tasks</li>
            <li>Settings</li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default App;

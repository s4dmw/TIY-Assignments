// User Stories

// I can add a task to my todo list so that I can remember to do it later.
function addTask(newTask){
	//takes the 'newTask' input and adds it to the list when `enter` is pressed
	//sets status of task is incomplete
};

// I can edit a task on my todo list so that I can correct typos.
function editTask(task){
	//when the tak is double clicked, the user can edit the task
	//does not change status of task (complete of incomplete)
};

// I can mark a task as complete so that I remember that I have done it.
function completeTask(task){
	//when the user clicks on the circle next to the task:
	//if the task is incomplete
			// checks the circle next to the task
			//strikes through the text of the task
			//changes "status" of task to complete
	//if the task already had complete status - the incompleteTask function is called
};

// I can mark a completed task as incomplete so that I actually complete it this time.
function incompleteTask(task){
	//when the user clicks on the circle next to the task:
	//if the task is complete
			// unchecks the circle next to the task
			//removes the strikethrough of the text of the task
			//changes "status" of task to incomplete
	//if the task already has incomplete status - the completeTask function is called
};

// I can delete a task from my todo list so that I don't have to see it any more.
function deleteTask(task){
	//deletes selected task when the 'X' is cicked
};

// I can delete all the completed tasks from my todo list so that I can clean up completed tasks.
function deleteCompleted(completedTasks){
	// deletes all of the tasks with a status of completedTasks when the 'clear completed'
	// button is clicked on
};

// I can filter the list of tasks so that I can see just what tasks I have completed and what
// are left to do.
function filterTasks(){
	// if 'All' button is clicked
			// all tasks are shown/listed
	// if 'Active' button is clicked
			// only incomplete tasks are shown/listed
	// if 'Completed' button is clicked
			// only completed tasks are shown/listed
	};

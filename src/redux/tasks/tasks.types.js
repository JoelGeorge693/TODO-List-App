const TaskActionTypes = {
  CREATE_TASKS: "CREATE_TASKS",
  PENDING_TASKS: "PENDING_TASKS",
  ABANDON_TASKS: "ABANDON_TASKS",
  COMPLETED_TASKS: "COMPLETED_TASKS",
  TASKS_IN_PROGRESS: "TASKS_IN_PROGRESS",
  CURRENT_TASK_TYPE: "CURRENT_TASK_TYPE",
  DELETE_TASK:"DELETE_TASK",
  DELETE_TASK_FROM_PENDING:"DELETE_TASK_FROM_PENDING",
  DELETE_TASK_FROM_ABANDON:"DELETE_TASK_FROM_ABANDON",
  DELETE_TASK_FROM_COMPLETED:"DELETE_TASK_FROM_COMPLETED",
  DELETE_TASK_IN_PROGRESS:"DELETE_TASK_IN_PROGRESS"
};

export default TaskActionTypes;

export const reviewFeature = (id: any) => {
  return {
    type: "REVIEW",
    payload: id,
  };
};

export const addContributorToTeam = (teamID: any, array: any) => {
  console.log(array);
  return {
    type: "ADDMEMBER",
    payload: teamID,
    memberArray: array,
  };
};

export const createNewTask = (projectID: string | number, taskObjects: any) => {
  return {
    type: "CREATETASK",
    payload: projectID,
    taskObjects: taskObjects,
  };
};

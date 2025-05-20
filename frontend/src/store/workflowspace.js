import { create } from "zustand";

// custom hook toh aage har jagah use hoga
const useWorkflowStore = create((set) => ({
  workflows: [], //workflows are null at starting

  selectedWorkflow: null, //no selected workflow
  
  setWorkflow: (newWorkflows) => set({ workflows: newWorkflows }),
  
  addWorkflow: (workflow) =>
    set((state) => ({
      workflows: [...state.workflows, workflow],
    })),
  
    setSelectedWorkflow: (workflow) => set({ selectedWorkflow: workflow }),
}));

export default useWorkflowStore;

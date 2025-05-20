import { create } from "zustand";

// custom hook toh aage har jagah use hoga
const useWorkflowStore = create((set) => ({
  workflows: [], //workflows are null at starting

  selectedWorkflow: null, //no selected workflow

  setWorkflows: (workflows) => set({ workflows }),

  addWorkflow: (workflow) =>
    set((state) => ({
      workflows: [...state.workflows, workflow],
    })),
}));

export default useWorkflowStore;

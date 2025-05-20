import React, { useEffect, useState } from "react";
import WorkflowLabel from "./WorkflowLabel";
import { getAllWorkLabels, deleteWorkLabel } from "../api/worklabel";

const WorkflowLabelsList = () => {
  const [labels, setLabels] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLabels = async () => {
    try {
      const { data } = await getAllWorkLabels();
      setLabels(data);
    } catch (error) {
      console.error("Error fetching labels:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLabels();
  }, []);

  const handleDelete = async (id) => {
    console.log("deelitng label with id:", id);
    try {
      await deleteWorkLabel(id);
      setLabels((prev) => prev.filter((label) => label._id !== id));
    } catch (error) {
      console.error("Failed to delete label:", error);
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <p className="text-5xl text-blue-600">Loading..</p>
      </div>
    );

  return (
    <div className="space-y-4">
      {labels.length === 0 && <p className="flex items-center justify-center font-bold text-2xl uppercase">No labels found.</p>}
      {labels.map(({ _id, title, description }) => (
        <WorkflowLabel
          key={_id}
          id={_id}
          title={title}
          description={description}
          editLink={`/editor/${_id}`} // Adjust route as needed
          onDelete={() => handleDelete(_id)} // pass handler
        />
      ))}
    </div>
  );
};

export default WorkflowLabelsList;

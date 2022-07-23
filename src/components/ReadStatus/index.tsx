import { localStorageService } from "@site/src/services/storage/localStorage";
import React from "react";

interface IReadStatusProps {
  frontMatter: any;
}

const ReadStatus = (props: IReadStatusProps): JSX.Element => {
  const learningUnits = (props.frontMatter.learningUnits ?? "")
    .split(",")
    .map((lesson: string) => lesson.trim());

  const completionStatus =
    localStorageService.arelearningUnitsComplete(learningUnits);

  const [read, setRead] = React.useState(completionStatus);

  const handleChange = () => {
    const newReadStatus = !read;
    if (newReadStatus) {
      localStorageService.updateCompletedlearningUnits(learningUnits);
    } else {
      localStorageService.removeCompletedlearningUnits(learningUnits);
    }
    setRead(newReadStatus);
  };

  return (
    <div>
      <input type="checkbox" checked={read} onChange={handleChange} />
      Mark as read
    </div>
  );
};

export default ReadStatus;

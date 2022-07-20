import { localStorageService } from "@site/src/services/storage/localStorage";
import React from "react";

interface IReadStatusProps {
  frontMatter: any;
}

const ReadStatus = (props: IReadStatusProps): JSX.Element => {
  const lessons = (props.frontMatter.lessons ?? "")
    .split(",")
    .map((lesson: string) => lesson.trim());

  const completionStatus = localStorageService.areLessonsComplete(lessons);

  const [read, setRead] = React.useState(completionStatus);

  const handleChange = () => {
    const newReadStatus = !read;
    if (newReadStatus) {
      localStorageService.updateCompletedLessons(lessons);
    } else {
      localStorageService.removeCompletedLessons(lessons);
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

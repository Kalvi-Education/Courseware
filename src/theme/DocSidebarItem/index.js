import React, { useState } from "react";
import DocSidebarItemCategory from "@theme/DocSidebarItem/Category";
import DocSidebarItemLink from "@theme/DocSidebarItem/Link";
import DocSidebarItemHtml from "@theme/DocSidebarItem/Html";
import { localStorageService } from "@site/src/services/storage/localStorage";
import { lessonStoreKey } from "@site/src/services/storage/storage";

const calculateLessonGroupCompletionStatus = (lessons, completedLessons) => {
  let completed = 0;
  lessons.forEach((lesson) => {
    if (completedLessons.includes(lesson.trim())) {
      completed++;
    }
  });

  let completionFlag = 0;

  if (completed === 0) {
    // Not started OR no lessons
    completionFlag = 0;
  } else if (completed === lessons.length) {
    // Fully complete
    completionFlag = 2;
  } else {
    // Partially complete
    completionFlag = 1;
  }

  return completionFlag;
};

export default function DocSidebarItem({ item, ...props }) {
  let completed = localStorageService.getCompletedLessons();

  const lessons =
    item.type === "link"
      ? item.customProps?.lessons ?? []
      : item.type === "category"
      ? [
          ...new Set(
            [].concat.apply(
              [],
              item.items.map((child) => {
                const childLessons = [].concat(...child.customProps?.lessons);
                return childLessons;
              })
            )
          ),
        ]
      : [];

  const [completionFlag, setCompletionFlag] = useState(() =>
    calculateLessonGroupCompletionStatus(lessons, completed)
  );

  localStorageService.onUpdate(({ key, value }) => {
    if (key === lessonStoreKey) {
      setCompletionFlag(calculateLessonGroupCompletionStatus(lessons, value));
    }
  });

  switch (item.type) {
    case "category":
      return (
        <DocSidebarItemCategory
          item={item}
          completionFlag={completionFlag}
          key={completionFlag}
          {...props}
        />
      );

    case "html":
      return (
        <DocSidebarItemHtml
          item={item}
          completionFlag={completionFlag}
          key={completionFlag}
          {...props}
        />
      );

    case "link":
    default:
      return (
        <DocSidebarItemLink
          item={item}
          completionFlag={completionFlag}
          key={completionFlag}
          {...props}
        />
      );
  }
}

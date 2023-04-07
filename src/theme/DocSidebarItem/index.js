import React, { useState } from "react";
import DocSidebarItemCategory from "@theme/DocSidebarItem/Category";
import DocSidebarItemLink from "@theme/DocSidebarItem/Link";
import DocSidebarItemHtml from "@theme/DocSidebarItem/Html";
import { localStorageService } from "@site/src/services/storage/localStorage";
import { learningUnitStoreKey } from "@site/src/services/storage/storage";

const calculateLearningUnitGroupCompletionStatus = (
  learningUnits,
  completedLearningUnits
) => {
  let completed = 0;
  learningUnits.forEach((learningUnit) => {
    if (completedLearningUnits.includes(learningUnit.trim())) {
      completed++;
    }
  });

  let completionFlag = 0;

  if (completed === 0) {
    // Not started OR no learningUnits
    completionFlag = 0;
  } else if (completed === learningUnits.length) {
    // Fully complete
    completionFlag = 2;
  } else {
    // Partially complete
    completionFlag = 1;
  }

  return completionFlag;
};

export default function DocSidebarItem({ item, ...props }) {
  let completed = localStorageService.getCompletedLearningUnits();

  const learningUnits =
    item.type === "link"
      ? item.customProps?.learningUnits ?? []
      : item.type === "category"
      ? [
          ...new Set(
            [].concat.apply(
              [],
              item.items.map((child) => {
                const childLearningUnits = [].concat(
                  ...child.customProps?.learningUnits
                );
                return childLearningUnits;
              })
            )
          ),
        ]
      : [];

  const [completionFlag, setCompletionFlag] = useState(() =>
    calculateLearningUnitGroupCompletionStatus(learningUnits, completed)
  );

  localStorageService.onUpdate(({ key, value }) => {
    if (key === learningUnitStoreKey) {
      setCompletionFlag(
        calculateLearningUnitGroupCompletionStatus(learningUnits, value)
      );
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

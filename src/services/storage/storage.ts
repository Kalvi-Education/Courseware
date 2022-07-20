export const lessonStoreKey = "completedLessons";

export abstract class StorageService {
  id: string;
  onUpdateCallbacks?: (({
    key,
    value,
  }: {
    key: string;
    value: any;
  }) => void)[] = [];

  constructor() {}

  set(key: string, value: any): void {
    if (this.onUpdateCallbacks.length) {
      this.onUpdateCallbacks.forEach((callback) => {
        callback({
          key,
          value,
        });
      });
    }
  }
  get(key: string): any {}
  onUpdate(callback: ({ key, value }: { key: string; value: any }) => void) {
    this.onUpdateCallbacks.push(callback);
  }

  setCompletedLessons(lessons: string[]) {
    this.set(lessonStoreKey, lessons);
  }

  getCompletedLessons(): string[] {
    return this.get(lessonStoreKey);
  }

  updateCompletedLessons(lessons: string[]): void {
    this.setCompletedLessons([
      ...new Set([...this.getCompletedLessons(), ...lessons]),
    ]);
  }

  removeCompletedLessons(lessons: string[]): void {
    this.setCompletedLessons(
      this.getCompletedLessons().filter((lesson) => !lessons.includes(lesson))
    );
  }

  areLessonsComplete(lessons: string[]): boolean {
    const completedLessons = this.getCompletedLessons();
    for (const lesson of lessons) {
      if (!completedLessons.includes(lesson)) {
        return false;
      }
    }
    return true;
  }
}

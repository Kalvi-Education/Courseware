export const learningUnitStoreKey = "completedLearningUnits";

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

  setCompletedLearningUnits(learningUnits: string[]) {
    this.set(learningUnitStoreKey, learningUnits);
  }

  getCompletedLearningUnits(): string[] {
    return this.get(learningUnitStoreKey) ?? [];
  }

  updateCompletedlearningUnits(learningUnits: string[]): void {
    this.setCompletedLearningUnits([
      ...new Set([...this.getCompletedLearningUnits(), ...learningUnits]),
    ]);
  }

  removeCompletedlearningUnits(learningUnits: string[]): void {
    this.setCompletedLearningUnits(
      this.getCompletedLearningUnits().filter(
        (learningUnit) => !learningUnits.includes(learningUnit)
      )
    );
  }

  arelearningUnitsComplete(learningUnits: string[]): boolean {
    const completedLearningUnits = this.getCompletedLearningUnits();
    for (const learningUnit of learningUnits) {
      if (!completedLearningUnits.includes(learningUnit)) {
        return false;
      }
    }
    return true;
  }
}

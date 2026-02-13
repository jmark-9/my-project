// utils/randomSelector.ts
export function getRandomNumber(items: any[]): number {
  const randomIndex = Math.floor(Math.random() * items.length);
  return randomIndex;
}

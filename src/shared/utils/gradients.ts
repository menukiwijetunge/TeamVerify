export const GRADIENTS = [
  "linear-gradient(90deg, #E63946, #F48FB1)",
  "linear-gradient(90deg, #C2185B, #7B1FA2)",
  "linear-gradient(90deg, #1E88E5, #43A047)",
  "linear-gradient(90deg, #FB8C00, #FDD835)",
  "linear-gradient(90deg, #00897B, #29B6F6)",
  "linear-gradient(90deg, #5E35B1, #3949AB)",
  "linear-gradient(90deg, #7CB342, #C0CA33)",
  "linear-gradient(90deg, #D81B60, #FF8A65)",
];

export const LIGHT_TINTS = [
  "#FDEEF1",
  "#FBEBF3",
  "#EAF3FC",
  "#FFF6E0",
  "#E6F6F3",
  "#F0EDFB",
  "#F2F8E7",
  "#FDECEF",
];

function hashCourseId(courseId: string): number {
  let hash = 0;
  for (let i = 0; i < courseId.length; i++) {
    hash = courseId.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % GRADIENTS.length;
}

export function getGradientForCourse(courseId: string): string {
  return GRADIENTS[hashCourseId(courseId)];
}

export function getLightTintForCourse(courseId: string): string {
  return LIGHT_TINTS[hashCourseId(courseId)];
}
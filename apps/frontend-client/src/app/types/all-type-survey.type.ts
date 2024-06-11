export interface QuestionSurveyType {
  id: number;
  question: string;
  image?: string;
}

export interface WidthProps {
  width: string;
  color?: "warning" | "success" | "purple";
  className?: string;
}

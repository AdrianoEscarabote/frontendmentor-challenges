export interface CardProps {
  type: "Work" | "Play" | "Study" | "Exercise" | "Social" | "Self Care"
  title: string
  timeframes: {
    daily: {
      current: number
      previous: number
    }
    weekly: {
      current: number
      previous: number
    }
    monthly: {
      current: number
      previous: number
    }
  }
}

export const iconPaths = {
  Work: "/images/icon-work.svg",
  Play: "/images/icon-play.svg",
  Study: "/images/icon-study.svg",
  Exercise: "/images/icon-exercise.svg",
  Social: "/images/icon-social.svg",
  "Self Care": "/images/icon-self-care.svg",
}

export const backgroundColors = {
  Work: "bg-primary-soft-orange",
  Play: "bg-primary-soft-blue",
  Study: "bg-primary-soft-red",
  Exercise: "bg-primary-soft-green",
  Social: "bg-primary-soft-purple",
  "Self Care": "bg-primary-soft-yellow",
}

import { animate, inView, stagger } from "motion"

export const showAnimation = (element: string) => {
    animate(element, {
      y: 0
    },
    {
      duration: 0.5,
      delay: stagger(0.1)
    })
}

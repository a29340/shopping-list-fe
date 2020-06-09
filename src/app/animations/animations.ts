import {animate, style, transition, trigger} from '@angular/animations';

export const inOut = trigger(
  'inOutAnimation',
  [
    transition(
      ':enter',
      [
        style({opacity: 0 }),
        animate('.2s', style({ opacity: 1 }))
      ]
    ),
    transition(
      ':leave',
      [
        style({opacity: 1 }),
        animate('1s ease-in', style({opacity: 0 }))
      ]
    )
  ]
)

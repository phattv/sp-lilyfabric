import { trigger, state, animate, style, transition } from '@angular/animations';

export function routerTransition() {
  return {
    slideToLeft: slideToLeft,
    slideToRight: slideToRight
  }
}

const triggerName = 'routerTransition',
  animationDuration = '0.3s',
  animationFunction = 'ease-in-out';

export function slideToRight() {
  return trigger(triggerName, [
    // state('void', style({ position: 'fixed', width: '100%' })),
    // state('*', style({ position: 'fixed', width: '100%' })),
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate(animationDuration + ' ' + animationFunction, style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate(animationDuration + ' ' + animationFunction, style({ transform: 'translateX(100%)' }))
    ])
  ]);
}

export function slideToLeft() {
  return trigger(triggerName, [
    // state('void', style({ position: 'fixed', width: '100%' })),
    // state('*', style({ position: 'fixed', width: '100%' })),
    transition(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate(animationDuration + ' ' + animationFunction, style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate(animationDuration + ' ' + animationFunction, style({ transform: 'translateX(-100%)' }))
    ])
  ]);
}

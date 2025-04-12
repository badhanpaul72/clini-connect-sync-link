
// Type definitions for GSAP and ScrollTrigger
declare module 'gsap/ScrollTrigger' {
  export class ScrollTrigger {
    static create(vars: any): any;
    static getAll(): any[];
    static kill(revert?: boolean): void;
    static refresh(safe?: boolean): void;
    kill(revert?: boolean): void;
  }

  export interface ScrollTriggerInstance {
    kill(revert?: boolean): void;
    refresh(): void;
    disable(): void;
    enable(): void;
  }
}

declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: any, vars?: any);
    static create(target: any, vars?: any): SplitText;
    revert(): void;
    split(vars?: any): void;
    getText(element?: Element): string;
    setText(text: string): void;
    elements: HTMLElement[];
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars?: any): ScrollSmoother;
    refresh(): void;
    scrollTop(position?: number): number | void;
    progress(progress: number): number | void;
    disable(reset?: boolean): void;
    enable(): void;
    killed(): boolean;
    getScrollFunc(): (position: number) => void;
    scrollWidth(): number;
    content(): HTMLElement;
    wrapper(): HTMLElement;
    smoothScroll(amount: number, duration?: number): void;
  }
}

declare module 'gsap-trial' {
  export * from 'gsap';
}

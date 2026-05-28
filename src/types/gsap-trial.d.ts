declare module "gsap-trial/SplitText" {
  import { Element as GElement, GSAPTweenVars } from "gsap";

  export interface SplitTextVars {
    type?: string;
    linesClass?: string;
    wordsClass?: string;
    charsClass?: string;
    [key: string]: any;
  }

  export class SplitText {
    constructor(targets: string | string[] | Element | Element[] | NodeList | any, vars?: SplitTextVars);
    chars: any[];
    words: any[];
    lines: any[];
    revert(): void;
  }
}

interface Religion {
  name: string
  founder: string
  sutra: string[]
}

class Religion implements Religion {
    name: string;
    founder: string;
    sutra: string[];
    constructor(name: string, founder: string, sutra: string[]) {};
}
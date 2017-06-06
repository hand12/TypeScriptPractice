interface Religion {
    name: string;
    founder: string;
    sutra: string[];
}

class Religion implements Religion {
    name: string;
    founder: string;
    sutra: string[];
    constructor(name: string, founder: string, sutra: string[]) {
        this.name = name;
        this.founder = founder;
        this.sutra = sutra;
    };
}

let hoge = new Religion("yusuke", "yamashita", ["hoge", "fuga"])
alert(hoge.sutra);
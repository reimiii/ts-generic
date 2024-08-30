describe('Generic', () => {
    class GenData<T> {
        data: T;

        constructor(data: T) {
            this.data = data;
        }

        get(): T {
            return this.data;
        }

        set(data: T): void {
            this.data = data;
        }
    }

    it('should accept one type of data', () => {
        const d = new GenData<number>(100);
        expect(d.data).toBe(100);
        // d.data = true;
        // d.data = "string";

        const f = new GenData<string>("hmmm");
        expect(f.data).toBe("hmmm");
    });

    function create<T>(t: T): T {
        return t;
    }

    it('should function generic', () => {
        const res = create<string>("UGH");
        expect(res).toBe("UGH");

        expect(create<boolean>(true)).toBe(true);
    });

    class Entry<K, V> {
        constructor(public key: K, public value: V) {
        }
    }

    class Triple<K, V, T> {
        constructor(public f: K, public s: V, public t: T) {
        }
    }

    it('should support multiple generic', () => {
        const entry = new Entry<string, string>("PACMAN", "AUR");
        expect(typeof entry.key).toBe("string");
        expect(typeof entry.value).toBe("string");

        const tree = new Triple<boolean, number, string>(
            true, 123, "MM"
        );

        expect(typeof tree.f).toBe("boolean");
        expect(typeof tree.s).toBe("number");
        expect(typeof tree.t).toBe("string");

    });

    it('should optional generic type', () => {
        const ent = new Entry(1, "pacman");

        expect(typeof ent.key).toBe("number");
        expect(typeof ent.value).toBe("string");
    });

    class SimGen<T = number> {
        private data?: T;

        setData(data: T): void {
            this.data = data;
        }

        getData(): T | undefined {
            return this.data;
        }
    }

    it('should not support optional generic', () => {
        const sim = new SimGen<string>();
        sim.setData("ST");
        // sim.setData(11);
        // sim.setData(true);

        expect(sim.getData()!.toUpperCase()).toBe("ST");
    });

    interface Employee {
        id: number;
        name: string;
    }

    interface Manager extends Employee {
        totalEmp: number;
    }

    interface VP extends Manager {
        totalMng: number;
    }

    class DataEmp<T extends Employee> {
        constructor(public t: T) {
        }
    }

    it('should generic constrain', () => {
        const emp1 = new DataEmp<Employee>({
            id: 1,
            name: "strong",
        });

        // selain turunan Employee ga boleh dipake... batasi tipe generic
        console.info(emp1);
    });

    it('should support array', () => {
        const names = new Array<string>()
        names.push("Mee");
        names.push("Kaan")
        console.info(names)
    });

    it('should support set', () => {
        const num = new Set<number>();
        num.add(1);
        num.add(2);
        num.add(2);
        num.add(2);

        expect(num.size).toBe(2);

        console.info(num);
    });

    it('should support map', () => {
        const env = new Map<string, string>();
        env.set("PATH", "PACMAN");

        expect(env.get("PATH")).toBe("PACMAN");
        console.info(env);
    });
});
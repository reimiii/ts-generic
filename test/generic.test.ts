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

    class SimGen<T> {
        private data?: T;

        setData(data: T): void {
            this.data = data;
        }

        getData(): T | undefined {
            return this.data;
        }
    }

    it('should not support optional generic', () => {
        const sim = new SimGen();
        sim.setData("ST");
        // sim.setData(11);
        // sim.setData(true);

        expect(sim.getData()!.toUpperCase()).toBe("ST");
    });
});
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
});
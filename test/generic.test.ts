describe('Generic', () => {
    class GenData<T> {
        data: T;

        constructor(data: T) {
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
});
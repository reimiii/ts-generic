describe('no generic', () => {
    class Data {
        value: any;

        constructor(value: any) {
            this.value = value;
        }
    }

    it('should accept all', () => {
        const data = new Data("Me");
        // data.value = 100;

        console.info(data.value.toUpperCase());
    });
});
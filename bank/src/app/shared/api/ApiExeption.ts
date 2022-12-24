export class ApiExeption extends Error {
    public readonly message: string  = '';
    constructor(params) {
        super();

        this.message = params;
    }
}
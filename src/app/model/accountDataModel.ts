// Vai ser minha forma de entrada de dados, aqui estão os dados que eu quero trazer
export interface AccountDataModel {
    name: string;
    // objeto account
    account: {
    agency: string;
    number: string;
    };
    card: {
        limit: number;
        number: string;
    }
}
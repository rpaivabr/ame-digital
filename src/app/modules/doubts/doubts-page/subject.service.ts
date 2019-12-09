import { Injectable } from '@angular/core';

@Injectable()
export class SubjectService {

    private subjects = [
        [
            { value: 1, name: 'Alterar telefone'},
            { value: 2, name: 'Alterar e-mail'},
            { value: 3, name: 'Autenticar cartão'},
            { value: 4, name: 'Quero me descadastrar'},
            { value: 5, name: 'Não recebi e-mail de confirmação'},
            { value: 6, name: 'Como funciona a Ame'},
            { value: 7, name: 'Quero alterar meu cadastro'},
            { value: 8, name: 'Quero reativar minha conta'},
            { value: 9, name: 'Não recebi SMS'},
            { value: 10, name: 'Esqueci meu login/senha'},
            { value: 11, name: 'Outros'},
        ],
        [
            { value: 1, name: 'Outros'},
            { value: 2, name: 'Cobrança indevida ou em duplicidade'},
            { value: 3, name: 'Parcelamento errado'},
            { value: 4, name: 'Problemas na transferência'},
            { value: 5, name: 'Problemas com o pagamento'},
            { value: 6, name: 'Dúvidas sobre aprovação'},
            { value: 7, name: 'Alterar forma de pagamento'},
            { value: 8, name: 'Formas de pagamento disponíveis'},
            { value: 9, name: 'Como efetuar um pagamento'}
        ],
        [
            { value: 1, name: 'Outros'},
            { value: 2, name: 'Valor divergente'},
            { value: 3, name: 'Liberação "Receba de Volta"'},
            { value: 4, name: 'Como funciona'}
        ],
        [
            { value: 1, name: 'Dúvidas sobre saldo'},
            { value: 2, name: 'O que são valores pendentes'},
            { value: 3, name: 'Como carregar saldo'},
            { value: 4, name: 'Como funciona'}
        ],
        [
            { value: 1, name: 'Outros'},
            { value: 2, name: 'Dúvida sobre prazo de estorno'},
            { value: 3, name: 'Status de estorno solicitado'},
            { value: 4, name: 'Solicitar estorno'}
        ],
        [
            { value: 1, name: 'Quero me tornar um parceiro Ame'},
            { value: 2, name: 'Como funciona a Ame'}
        ]
    ];

    getSubjects() {
        return this.subjects;
    }
}

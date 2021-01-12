$(function () {
    $('#form-certificacao').form({
        nome: {
            identifier: 'nome',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Preencha seu nome'
                }
            ]
        },
        email: {
            identifier: 'email',
            rules: [
                {
                    type: 'email',
                    prompt: 'Digite um email válido'
                }
            ]
        },
        email: {
            identifier: 'telefone',
            rules: [
                {
                    type: 'regExp',
                    value: /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/i,
                    prompt: 'Digite um email válido'
                }
            ]
        },
        onsuccess: function (e) {
            e.preventDefault();
            alert('OK');
        }

    })

});

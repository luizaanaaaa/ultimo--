const perguntas = [
    {
        enunciado: 'Você já montou em um cavalo?',
        alternativas: [
            {
                texto: 'Sim, é incrível!',
                afirmacao: [
                    'Você adora cavalos.',
                    'sim'
                ],
                proxima:1,
            },
            {
                texto: 'Não, nunca tentei.',
                afirmacao:[
                     'Quem sabe um dia você tenta!',
                    'Quero muito'
                ],
                proxima: 2,
            }
        ]
    },
    {
        enunciado: 'Qual raça de cavalo você mais gosta?',
        alternativas: [
            {
                texto: 'Puro Sangue Árabe',
                afirmacao: [
                    'Uma raça elegante e veloz!',
                        'são lindos'
                ],
                proxima: 3,
            },
            {
                texto: 'Cavalo de Trabalho',
                afirmacao: [
                    "Muito resistente e forte!",
                    'amores'
                ],
                proxima: 4,
            }
        ]
    },
    {
        enunciado: 'Você prefere cavalos grandes ou pequenos?',
        alternativas: [
            {
                texto: 'Grandes, imponentes!',
                afirmacao: [
                    'Cavalos grandes têm uma presença impressionante.',
                    ''
                ],
                proxima: 5,
            },
                {
                texto: 'Pequenos, ágeis!',
                afirmacao:[
                'Cavalos pequenos são rápidos e divertidos.',
                    ''
                ],
                proxima: 6,
            }
        ]
    },
    {
        enunciado: 'Qual cor de cavalo você acha mais bonita?',
        alternativas: [
            {
                texto: 'Preto',
                afirmacao:[
                    'Elegância pura!',
                    ''
                ],
                proxima: 7,
            },
            {
                texto: 'Baio (marrom)',
                afirmacao: [
                    'Uma cor clássica e charmosa.',
                    ''
                ],
                proxima: 8,
            }
        ]
    },
    {
        enunciado: 'Você gostaria de ter um cavalo?',
        alternativas: [
            {
                texto: 'Sim, adoraria!',
                afirmacao:[
                 'Com um cavalo, você teria uma ótima companhia.',
                 ''
                ],
            },
            {
                texto: 'Não, não sou muito fã.',
                afirmacao: [
                    'Cavalos não são para todos, tudo bem!',
                    ''
                ],
            }
        ]
    },
];
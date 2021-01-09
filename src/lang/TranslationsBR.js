export default {
    fr: {
        Home: {
            record: 'Registro',
            historyBtn: 'HISTÓRICO',
            about: 'SOBRE',
            searchBar: {
                customLoaded: 'O mapa personalizado foi carregado',
                enterCity: 'Insira uma cidade, estado ou país',
            },
            aboutDescriptions: {
                1: "Os jogadores competem o quão perto o jogador pode adivinhar locais aleatórios em cinco rodadas.  \
                Você pode compartilhar a pontuação com outras pessoas através das redes sociais, como Facebook ou Twitter. \
                Você pode jogar jogos multijogador com seus amigos até cinco amigos.   \
                O primeiro jogador cria uma sala e decide o tamanho da sala. Outros jogadores digitam o mesmo nome da sala que o primeiro jogador criado e o jogo começará.",
                2: 'Este jogo foi desenvolvido com base no ',
            },
            customMap: 'MAPAS CUSTOMIZADOS',
            customMapDescriptions: {
                1: 'Você pode limitar locais aleatórios para cidade, estado ou país com a barra de pesquisa.',
                2: 'No multiplayer, o primeiro jogador fixa a localização.',
                3: 'Além disso, você pode utilizar criar mapas customizados utilizando:',
                4: 'Arquivos.',
                5: 'Insira o conteúdo do mapa GeoJson com o botão:',
                6: 'exemplos de mapas customizado: ',
            },
            limitation: 'LIMITAÇÃO',
            limitationDescription:
                "Se o mapa não carregar, significa que as cotas foram excedidas no dia. \
                 Ele será reiniciado à meia-noite no horário do Pacífico.",
            play: 'Jogar',
        },
        StreetView: {
            nearby: {
                title: 'Posição aproximada',
                message:
                    'Infelizmente, não foi possível encontrar uma posição aleatória no local definido. No entanto, encontramos um próximo 😉',
            },
            waitForOtherPlayers: 'Esperando por outros jogadores...',
            redirectToHomePage: 'Redirecionando para a página inicial...',
            exitGame:
                'Você foi forçado a sair do jogo. Redirecionando para a página inicial após 5 segundos...',
            waitForOtherPlayersToFinish:
                'Esperando que outros jogadores terminem o jogo...',
        },
        Maps: {
            makeGuess: 'MAKE GUESS',
            guess: 'GUESS',
            nextRound: 'PROXIMA RODADA',
            viewSummary: 'VER RESUMO',
            exit: 'SAIR',
            reset: 'RESETAR',
            playAgain: 'JOGAR DE NOVO',
            infoWindow: {
                Distance: 'Distância',
                Points: 'Pontos',
            },
        },
        Header: {
            language: 'Língua',
            about: 'sobre',
            limitation: 'Limitação',
            contact: 'Contato',
        },
        HeaderGame: {
            room: 'SALA',
            round: 'RODADA',
            distance: 'DISTÂNCIA',
            kmaway: '{value} km de distância',
            score: 'PONTOS',
        },
        next: 'PRÓXIMO',
        cancel: 'CANCELAR',
        DialogCustomMap: {
            title: 'Mapa Personalizado',
            invalid: 'GeoJSON inválido',
            text: 'Texto',
            url: 'Url',
            file: 'Arquivo',
            edit: 'Editar mapa',
            fileLabel: 'Selecione o arquivo GeoJSON',
        },
        History: {
            title: 'Historico',
            date: 'Data',
            mode: 'Modo',
            time: 'Tempo',
            distance: 'Distância',
            points: 'Pontos',
            rank: 'Classificação',
            search: 'Pesquisa',
        },
        DialogRoom: {
            singlePlayer: 'Sozinho',
            withFriends: 'Com amigos',
            invalidRoomName: 'Nome inválido. Por favor, tente outro.',
            inProgress:
                'O primeiro jogador está criando a sala agora. Aguarde e tente novamente.',
            roomIsFull: 'Esta sala já está cheia. Por favor, tente outro.',
        },

        CardRoomName: {
            title: 'Digite um nome para a sala.',
        },
        CardRoomPlayerName: {
            title: 'Digite um nome de jogador.',
            anonymousPlayerName: 'Anônimo 🕵',
        },
        CardRoomSize: {
            title: 'Defina o tamanho da sala.',
        },
        CardRoomTime: {
            title: 'Defina uma limitação de tempo.',
            infinite: 'Infinito',
        },
        CardRoomDifficulty: {
            title: 'Defina a dificuldade',
            easy: 'Fácil',
            medium: 'Médio',
            hard: 'Difícil',
        },
        DialogSummary: {
            summaryMsgSingle:
                'Você está a <strong>{distance}</strong> km de distância! Sua pontuação é de <strong>{points}</strong> pontos!',
            summaryMsgMulti:
                'A pontuação de <strong>{playerName}</strong> é <strong>{points}</strong> ! (<strong>{distance}</strong> km de distância)',
            viewDetails: 'View details',
        },
        Footer: {
            under: 'under',
            privacyPolicy: 'Política de Privacidade',
        },
        urlCopied: 'Url copiada',
        DetailsMap: {
            moreInfo: 'Mais Informações',
        },
    },
};

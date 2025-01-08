<template>
    <div class="article-detail">
      <!-- Botão de Voltar Fixo no topo -->
      <a href="/" class="back-button">Voltar</a>
  
      <h1 class="heading-primary">{{ article.title }}</h1>
      <img :src="article.image" :alt="article.title" class="image-large">
      <p class="text-body">{{ article.summary }}</p>
      <div v-html="article.content" class="text-body"></div>
    </div>
  </template>
<script>
export default {
    name: 'ArticleDetail',
    props: ['id'], // Recebe o parâmetro da rota como prop
    data() {
        return {
            article: null,
        };
    },
    watch: {
        id: {
            immediate: true,
            handler() {
                this.fetchArticle(); // Atualiza o artigo sempre que o ID muda
            },
        },
    },
    methods: {
        fetchArticle() {
            // Substitua esta lógica pela chamada de API real
            const mockArticles = [
                {
                    id: 1,
                    title: 'Como escolher o melhor tipo de fiação para sua casa',
                    content:
                        'Dicas detalhadas sobre como escolher a fiação ideal para garantir segurança e eficiência.',
                    image: 'https://via.placeholder.com/600x400',
                },
                {
                    id: 2,
                    title: 'Manutenção preventiva: Evite surpresas com sua instalação elétrica',
                    content:
                        'A manutenção preventiva é essencial para evitar problemas graves e garantir o funcionamento adequado do sistema elétrico.',
                    image: 'https://via.placeholder.com/600x400',
                },
                {
                    id: 3,
                    title:
                        'Por que a instalação elétrica adequada é importante para sua segurança?',
                    content:
                        'Instalações elétricas bem planejadas e executadas são fundamentais para evitar acidentes e desperdícios de energia.',
                    image: 'https://via.placeholder.com/600x400',
                },
            ];

            // Busca o artigo correspondente
            this.article = mockArticles.find(
                (article) => article.id === parseInt(this.id)
            );

            if (!this.article) {
                console.warn('Artigo não encontrado.');
            }
        },
    },
};
</script>

<style scoped>
/* ==================== */
/* Estilos para o Componente ArticleDetail */
/* ==================== */

.article-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
    padding: var(--spacing-large);
    background-color: var(--color-surface);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    font-family: var(--font-primary);
}

.article-detail h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--color-primary);
    margin-bottom: var(--spacing-medium);
}

.article-detail p {
    font-size: 1rem;
    line-height: 1.75;
    color: var(--color-text);
    margin-bottom: var(--spacing-medium);
}

.article-detail img {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius);
    margin-bottom: var(--spacing-large);
}

/* ==================== */
/* Section de Títulos e Subtítulos */
.article-detail .subheading {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: var(--spacing-large);
    margin-bottom: var(--spacing-medium);
    color: var(--color-primary);
}

.article-detail .content {
    font-size: 1rem;
    line-height: 1.75;
    color: var(--color-text);
}

.article-detail .content img {
    max-width: 100%;
    margin-top: var(--spacing-medium);
    margin-bottom: var(--spacing-medium);
}

/* ==================== */
/* Botão de Voltar Fixo */
.article-detail .back-button {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: var(--spacing-small) var(--spacing-medium);
    background-color: var(--color-primary);
    color: black;
    text-decoration: none;
    border-radius: var(--border-radius);
    font-size: 1rem;
    transition: background-color 0.3s ease;
    z-index: 1000;
    /* Garante que o botão fique sempre por cima do conteúdo */
}

.article-detail .back-button:hover {
    background-color: darken(var(--color-primary), 10%);
}

/* ==================== */
/* Estilos Responsivos */
@media (max-width: 768px) {
    .article-detail {
        padding: var(--spacing-medium);
    }

    .article-detail h1 {
        font-size: 2rem;
    }

    .article-detail p {
        font-size: 0.9rem;
    }

    .article-detail .back-button {
        font-size: 0.9rem;
        width: 100%;
    }
}

@media (max-width: 480px) {
    .article-detail h1 {
        font-size: 1.75rem;
    }

    .article-detail p {
        font-size: 0.85rem;
    }

    .article-detail .subheading {
        font-size: 1rem;
    }
}
</style>
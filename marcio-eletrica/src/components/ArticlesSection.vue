<template>
  <section class="articles">
    <h2>Artigos Recentes</h2>
    <div class="article-list">
      <div class="article-card" v-for="article in articles" :key="article.id">
        <img :src="article.image" :alt="article.title" class="article-image" />
        <div class="article-content">
          <h3>{{ article.title }}</h3>
          <p>{{ article.summary }}</p>
          <router-link :to="{ name: 'ArticleDetail', params: { id: article.id } }" class="read-more">
            Ler mais
          </router-link>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ArticlesSection',
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'Como escolher o melhor tipo de fiação para sua casa',
          summary: 'Dicas práticas para garantir a segurança elétrica em sua residência.',
          image: 'https://via.placeholder.com/300x200',
        },
        {
          id: 2,
          title: 'Manutenção preventiva: Evite surpresas com sua instalação elétrica',
          summary: 'Saiba como fazer manutenções regulares para evitar gastos com reparos inesperados.',
          image: 'https://via.placeholder.com/300x200',
        },
        {
          id: 3,
          title: 'Por que a instalação elétrica adequada é importante para sua segurança?',
          summary: 'Entenda os riscos de uma instalação elétrica mal-feita e como evitá-los.',
          image: 'https://via.placeholder.com/300x200',
        }
      ]
    };
  }
}
</script>

<style scoped>
.articles {
  padding: 40px 20px;
  background-color: #f4f4f4;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
}

.article-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.article-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.article-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.article-content {
  padding: 20px;
}

.article-content h3 {
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.article-content p {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 15px;
}

.read-more {
  text-decoration: none;
  color: #ff9f00;
  font-weight: bold;
}

.read-more:hover {
  text-decoration: underline;
}
</style>
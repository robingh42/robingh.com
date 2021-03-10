<template>
    <div class="post-container">
        <router-link v-for="page in pages" :to="page.path" v-bind:key="page.frontmatter.date">
            <div class="post-card">
                <img class="article-image" :src="page.frontmatter.img" alt="">
                <div class="page-detail">
                    <div class="page-title">{{ page.title }}</div>
                    <div class="page-description">{{ page.frontmatter.description }}</div>
                    <div class="page-tags">{{ page.frontmatter.tags }}</div>
                 </div>
            </div>
        </router-link>
    </div>
</template>


<script>
export default {
    data() {
        return {
            pages: []
            .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        )
    }
  },
    mounted() {
        this.$site.pages.forEach(page => {
            if (page.frontmatter.type === "article") {
                this.pages.push(page)
      }
    })
  }
}
</script>

<style scoped>
@import '../styles/variables.styl';
.post-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
.post-card {
    position: relative;
    height: 180px;
    margin: 20px 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 10px;
    display: flex;
    align-items: center;
    overflow: hidden;
}
@media (max-width:768px) {
 .post-card[data-v-a40e995a] {
  flex-wrap:wrap;
  height:auto;
  align-items:unset;
  padding:3px
 }
}
.page-detail {
    width: 100%;
    flex-flow: column;
    padding: 20px 55px 20px 20px;
    text-align: center;       
}
.page-title {
    color: #000;
    text-decoration: none;
    font-size: 1.65rem;
    padding-bottom: 0.3rem;
    font-weight: 600;
    line-height: 1.25;
}
.page-description {
    color: #616161;
    line-height: 20px;
    font-weight: 300;
}
.page-tags {
    margin-top: 7px;
    font-weight: 600;
}
.article-image {
    width: 250px;
    height: 180px;
    object-fit: cover;
}
.page-description {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
<template>
  <div class="default container">
    <nuxt />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      count: 10,
      keywords: '',
    }
  },
  head() {
    return {
      title: this.seo.title,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.seo.keywords,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.seo.description,
        },
      ],
      link:[{
        href:"https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css",
        rel:"stylesheel"
      }],
      script:[
        {
          src:'https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js'
        },
        {
          src:'https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js'
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'admin',
      'categories',
      'articlesNew',
      'seo',
    ]),
    categoryByCut() {
      return this.categories.slice(0, this.count)
    },
    articlesNewCut() {
      return this.articlesNew.slice(0, this.count)
    },
  },
  methods: {
    handleSearch() {
      if (!this.keywords) return
      this.$router.push(`/?keywords=${encodeURIComponent(this.keywords)}&page=1`)
    }
  },
}
</script>

<style lang="scss" scoped>
.default {
  display: flex;
  .left {
    box-sizing: border-box;
    overflow: hidden;
    flex: 1;
    padding: 15px;
    .search {
      margin-bottom: 20px;
      width: 300px;
    }
  }
  .right {
    width: 260px;
    padding: 15px;
    a {
      font-size: 14px;
    }
    h3 {
      margin-bottom: 15px;
    }
    li {
      list-style: none;
      line-height: 1.8;
    }
    .new,
    .about,
    .category {
      font-size: 14px;
      margin-bottom: 30px;
    }
    .intro img {
      border-radius: 3px;
    }
    .footer {
      color: #999;
      font-size: 12px;
      margin-bottom: 30px;
      a {
        color: $main-color;
      }
    }
  }
}

@media screen and (max-width: 960px) {
  .default {
    display: block;
  }
}
</style>


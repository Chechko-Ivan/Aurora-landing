<template>
  <svg
    :viewBox="viewBox"
    :width="width"
    :height="height"
    :fill="fill"
    :stroke="stroke"
  />
</template>

<script>
import { parse } from 'postsvg'
import render from 'posthtml-render'

// Кэш загруженных иконок
const cache = new Map()

export default {
  name: 'BaseSVGIcon',
  props: {
    // Имя файла
    iconName: {
      type: String,
      required: true
    },

    // Ширина
    width: {
      type: [Number, String],
      default: 18
    },

    // Высота
    height: {
      type: [Number, String],
      default: 18
    },

    // Цвет заливки
    // eslint-disable-next-line vue/require-default-prop
    fill: {
      type: String,
      default: ''
    },

    // Цвет обводки
    stroke: {
      type: String,
      default: 'none'
    },

    // Генерировать ли событие ready иконки
    generateReadyEvent: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    svgString: ''
  }),
  computed: {
    // Путь расположения SVG-файла
    filepath() {
      return require(`~/static/icons/${this.iconName}.svg`)
    },

    // Распарсенное дерево SVG-файла
    parsedSVG() {
      return this.svgString ? parse(this.svgString) : null
    },

    // Размер холста
    viewBox() {
      return this.parsedSVG ? this.parsedSVG.root.attrs.viewBox : '0 0 20 20'
    }
  },
  watch: {
    // При изменении файла, перезагружаем его
    filepath: {
      immediate: true,
      handler: 'loadFile'
    },

    // При загрузке другого файла обновляем SVG
    svgString: 'refreshSvg',

    // При изменениях стилизации обновляем SVG
    stroke: 'refreshSvg',
    fill: 'refreshSvg'
  },
  methods: {
    // Загрузка содержимого SVG файла
    loadFile() {
      this.getSvgIconText()
        .then((responseText) => (this.svgString = responseText))
        // eslint-disable-next-line no-console
        .catch((error) => console.error('Ошибка загрузки SVG-файла', error))
    },

    // Получение SVG-файла в виде текстовой строки
    // + кэширование ранее загруженных файлов
    async getSvgIconText() {
      const url = this.filepath

      // Кэшируем загружаемые иконки
      // для сокращения запросов к серверу
      if (!cache.has(url)) {
        try {
          cache.set(url, fetch(url).then((r) => r.text()))
        } catch (e) {
          cache.delete(url)
        }
      }

      // Возвращаем содержимое из кэша
      return cache.has(url)
        ? // eslint-disable-next-line
          await cache.get(url)
        : Promise.reject(new Error('Нет SVG-файла в локальном кэше'))
    },

    // Обновление SVG
    refreshSvg() {
      Promise.resolve(this.parsedSVG)
        // Обновляем стилизацию
        .then((svgTree) => {
          svgTree.each('path', (node) => (node.attrs.fill = this.fill))
          return svgTree
        })
        // Оставляем только внутренности тега <svg>
        .then((svgTree) => render(svgTree.root.content))
        // Заменяем содержимое тега <svg> новым
        .then((svgHtml) => (this.$el.innerHTML = svgHtml))
        .then(() => this.generateReadyEvent && this.$emit('ready'))
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Ошибка при обновлении SVG', error)
          this.$emit('error', error)
        })
    }
  }
}
</script>

<style>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px;
  transition: fill 0.3s, stroke 0.3s;
}
</style>

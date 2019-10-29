const mongoose = require('mongoose')

const Tag = mongoose.model('Tag')
const Article = mongoose.model('Article')

exports.getTags = async (req, res, next) => {
  try {
    const { role } = res.locals.user
    const opt = role === 'superAdmin'
      ? {}
      : { isShow: true }

    let tags = await Tag.find(opt)
      .sort({
        sort: -1,
      })
      .exec()

    // 查询分类下文章数量
    const arr = await Article
      .aggregate([
        { $match: { isPublish: true } },
        { $group: { _id: '$tag', total: { $sum: 1 } } },
      ])
      .exec()
    // 待优化
    tags = JSON.parse(JSON.stringify(tags))

    const data = tags.map((tag) => {
      const t = arr.find(item => String(item._id) === String(tag.id))
      return {
        ...tag,
        total: t ? t.total : 0,
      }
    })

    res.handleSuccess(data)
  } catch (error) {
    res.handleError('分类获取失败', error)
  }
}


exports.getTag = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await Tag.findOne({
      _id: id,
    }).exec()
    res.handleSuccess(data)
  } catch (error) {
    res.handleError('分类详情获取失败', error)
  }
}

exports.postTag = async (req, res, next) => {
  const msg = req.checkBody({
    title: {
      required: '名字不能为空',
    },
  })
  if (msg) return res.handleError(msg)
  try {
    const { body } = req
    let data = await Tag.findOne({ title: body.title })
    if (data) { res.handleError('分类已存在') }
    data = await new Tag(body).save()
    res.handleSuccess(data)
  } catch (error) {
    res.handleError('分类创建失败', error)
  }
}

exports.patchTag = async (req, res, next) => {
  const msg = req.checkBody({
    title: {
      required: '名字不能为空',
    },
  })
  if (msg) return res.handleError(msg)

  try {
    let { body } = req
    const { id } = req.params
    body = await Tag.findByIdAndUpdate(id, body).exec()
    res.handleSuccess(body)
  } catch (error) {
    res.handleError('分类更新失败', error)
  }
}

exports.deleteTag = async (req, res, next) => {
  try {
    const { id } = req.params
    const body = await Tag.findByIdAndRemove(id).exec()
    res.handleSuccess(body)
  } catch (error) {
    res.handleError('分类删除失败', error)
  }
}

const { Post, Disease } = require("../model");
const { Share } = require("../model/shareUrl");

const sharePost = async (req, res, next) => {
  try {
    const { post: postId, rand } = req.query;

    const foundShare = await Share.findOne({ shareId: rand });

    if (foundShare) {
      return res.redirect(foundShare.url);
    }

    const post = await Post.findById({ _id: postId })
      .populate({
        path: "means_thearay_id",
        model: "treatment",
      })
      .populate({
        path: "symptons_id",
        model: "disease",
      });

    if (!post) {
      return res.status(404).json({ message: "post is not found." });
    }

    let url;
    let metaTagValues;

    if (post.whatHelped === "1" || post.whatHelped === "2") {
      url = `https://xpera.de/account/themaDetail/${post.symptons_id.name.replace(
        /\s/g,
        ""
      )}/${post.means_thearay_id.name.replace(/\s/g, "")}/${post._id}`;

      console.log(url);

      metaTagValues = {
        url: url,
        domain: process.env.BASE_URL,
        imageUrl: `https://xpera.de/readfiles/${post.means_thearay_id.image}`,
        title: post.means_thearay_id.name,
        description: post.means_thearay_id.desc,
        twitterCardType: "summary_large_image",
        twitterHandle: "@metacules",
      };
    } else {
      url = `https://xpera.de/account/themaDetail/${post.symptons_id.name.replace(
        /\s/g,
        ""
      )}/${post.professional_other.name.replace(/\s/g, "")}/${post._id}`;

      metaTagValues = {
        url: url,
        title: post.professional_other.name,
        twitterCardType: "summary_large_image",
        twitterHandle: "@metacules",
        domain: process.env.BASE_URL,
      };
    }

    await Share.create({ shareId: rand, url: url });

    return res.render("share", metaTagValues);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const shareDisease = async (req, res, next) => {
  try {
    const { disease: diseaseId, rand } = req.query;

    const foundShare = await Share.findOne({ shareId: rand });

    if (foundShare) {
      return res.redirect(foundShare.url);
    }

    const disease = await Disease.findOne({ _id: diseaseId });

    if (!disease) {
      return res.status(404).json({ message: "disease is not found." });
    }

    const url = `https://xpera.de/account/thema/${disease.name}/${disease._id}`;

    const metaTagValues = {
      url: url,
      domain: process.env.BASE_URL,
      imageUrl: `https://xpera.de/readfiles/${disease.image}`,
      title: disease.name,
      description: disease.desc,
      twitterCardType: "summary_large_image",
      twitterHandle: "@metacules",
    };

    await Share.create({ shareId: rand, url });

    return res.render("share", metaTagValues);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  sharePost,
  shareDisease,
};

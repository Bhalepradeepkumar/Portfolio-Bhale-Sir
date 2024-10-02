const researchPapers = [
  {
    title: "2017",
    cardTitle: "Attention Is All You Need",
    url: "https://arxiv.org/abs/1706.03762",
    cardSubtitle: "Ashish Vaswani, Noam Shazeer, et al.",
    cardDetailedText: "A groundbreaking paper introducing the Transformer model, which has significantly improved deep learning in NLP.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://example.com/transformer-model.jpg"
      }
    }
  },
  {
    title: "2012",
    cardTitle: "ImageNet Classification with Deep Convolutional Neural Networks",
    url: "https://proceedings.neurips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf",
    cardSubtitle: "Alex Krizhevsky, Ilya Sutskever, Geoffrey Hinton",
    cardDetailedText: "This paper demonstrates how deep learning models can achieve state-of-the-art results on the ImageNet dataset.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://example.com/imagenet-cnn.jpg"
      }
    }
  },
  {
    title: "2014",
    cardTitle: "Generative Adversarial Nets",
    url: "https://arxiv.org/abs/1406.2661",
    cardSubtitle: "Ian Goodfellow, Jean Pouget-Abadie, et al.",
    cardDetailedText: "Introduces GANs, a type of model that learns to generate data similar to a given dataset.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://example.com/gans.jpg"
      }
    }
  },
  {
    title: "2004",
    cardTitle: "The Five-Point Algorithm for Structure and Motion",
    url: "https://link.springer.com/article/10.1007/s11263-004-3158-8",
    cardSubtitle: "David Nister",
    cardDetailedText: "This paper describes an efficient algorithm for solving the relative pose problem in computer vision.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://example.com/5-point-algorithm.jpg"
      }
    }
  },
  {
    title: "2015",
    cardTitle: "Deep Residual Learning for Image Recognition",
    url: "https://arxiv.org/abs/1512.03385",
    cardSubtitle: "Kaiming He, Xiangyu Zhang, et al.",
    cardDetailedText: "This work introduces the concept of residual networks (ResNet), which allows the training of very deep networks.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://example.com/resnet.jpg"
      }
    }
  },
  {
    title: "2017",
    cardTitle: "Attention Is All You Need",
    url: "https://arxiv.org/abs/1706.03762",
    cardSubtitle: "Ashish Vaswani, Noam Shazeer, et al.",
    cardDetailedText: "A groundbreaking paper introducing the Transformer model, which has significantly improved deep learning in NLP.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://example.com/transformer-model.jpg"
      }
    }
  },
  {
    title: "2012",
    cardTitle: "ImageNet Classification with Deep Convolutional Neural Networks",
    url: "https://proceedings.neurips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf",
    cardSubtitle: "Alex Krizhevsky, Ilya Sutskever, Geoffrey Hinton",
    cardDetailedText: "This paper demonstrates how deep learning models can achieve state-of-the-art results on the ImageNet dataset.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://example.com/imagenet-cnn.jpg"
      }
    }
  },
  {
    title: "2014",
    cardTitle: "Generative Adversarial Nets",
    url: "https://arxiv.org/abs/1406.2661",
    cardSubtitle: "Ian Goodfellow, Jean Pouget-Abadie, et al.",
    cardDetailedText: "Introduces GANs, a type of model that learns to generate data similar to a given dataset.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://example.com/gans.jpg"
      }
    }
  },
  {
    title: "2004",
    cardTitle: "The Five-Point Algorithm for Structure and Motion",
    url: "https://link.springer.com/article/10.1007/s11263-004-3158-8",
    cardSubtitle: "David Nister",
    cardDetailedText: "This paper describes an efficient algorithm for solving the relative pose problem in computer vision.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://example.com/5-point-algorithm.jpg"
      }
    }
  },
  {
    title: "2015",
    cardTitle: "Deep Residual Learning for Image Recognition",
    url: "https://arxiv.org/abs/1512.03385",
    cardSubtitle: "Kaiming He, Xiangyu Zhang, et al.",
    cardDetailedText: "This work introduces the concept of residual networks (ResNet), which allows the training of very deep networks.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://example.com/resnet.jpg"
      }
    }
  },
  {
    title: "2017",
    cardTitle: "Attention Is All You Need",
    url: "https://arxiv.org/abs/1706.03762",
    cardSubtitle: "Ashish Vaswani, Noam Shazeer, et al.",
    cardDetailedText: "A groundbreaking paper introducing the Transformer model, which has significantly improved deep learning in NLP.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://example.com/transformer-model.jpg"
      }
    }
  },
  {
    title: "2012",
    cardTitle: "ImageNet Classification with Deep Convolutional Neural Networks",
    url: "https://proceedings.neurips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf",
    cardSubtitle: "Alex Krizhevsky, Ilya Sutskever, Geoffrey Hinton",
    cardDetailedText: "This paper demonstrates how deep learning models can achieve state-of-the-art results on the ImageNet dataset.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://example.com/imagenet-cnn.jpg"
      }
    }
  },
  {
    title: "2014",
    cardTitle: "Generative Adversarial Nets",
    url: "https://arxiv.org/abs/1406.2661",
    cardSubtitle: "Ian Goodfellow, Jean Pouget-Abadie, et al.",
    cardDetailedText: "Introduces GANs, a type of model that learns to generate data similar to a given dataset.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://example.com/gans.jpg"
      }
    }
  },
  {
    title: "2004",
    cardTitle: "The Five-Point Algorithm for Structure and Motion",
    url: "https://link.springer.com/article/10.1007/s11263-004-3158-8",
    cardSubtitle: "David Nister",
    cardDetailedText: "This paper describes an efficient algorithm for solving the relative pose problem in computer vision.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://example.com/5-point-algorithm.jpg"
      }
    }
  },
  {
    title: "2015",
    cardTitle: "Deep Residual Learning for Image Recognition",
    url: "https://arxiv.org/abs/1512.03385",
    cardSubtitle: "Kaiming He, Xiangyu Zhang, et al.",
    cardDetailedText: "This work introduces the concept of residual networks (ResNet), which allows the training of very deep networks.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://example.com/resnet.jpg"
      }
    }
  },
  {
    title: "2017",
    cardTitle: "Attention Is All You Need",
    url: "https://arxiv.org/abs/1706.03762",
    cardSubtitle: "Ashish Vaswani, Noam Shazeer, et al.",
    cardDetailedText: "A groundbreaking paper introducing the Transformer model, which has significantly improved deep learning in NLP.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://example.com/transformer-model.jpg"
      }
    }
  },
  {
    title: "2012",
    cardTitle: "ImageNet Classification with Deep Convolutional Neural Networks",
    url: "https://proceedings.neurips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf",
    cardSubtitle: "Alex Krizhevsky, Ilya Sutskever, Geoffrey Hinton",
    cardDetailedText: "This paper demonstrates how deep learning models can achieve state-of-the-art results on the ImageNet dataset.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://example.com/imagenet-cnn.jpg"
      }
    }
  },
  {
    title: "2014",
    cardTitle: "Generative Adversarial Nets",
    url: "https://arxiv.org/abs/1406.2661",
    cardSubtitle: "Ian Goodfellow, Jean Pouget-Abadie, et al.",
    cardDetailedText: "Introduces GANs, a type of model that learns to generate data similar to a given dataset.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://example.com/gans.jpg"
      }
    }
  },
  {
    title: "2004",
    cardTitle: "The Five-Point Algorithm for Structure and Motion",
    url: "https://link.springer.com/article/10.1007/s11263-004-3158-8",
    cardSubtitle: "David Nister",
    cardDetailedText: "This paper describes an efficient algorithm for solving the relative pose problem in computer vision.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://example.com/5-point-algorithm.jpg"
      }
    }
  },
  {
    title: "2015",
    cardTitle: "Deep Residual Learning for Image Recognition",
    url: "https://arxiv.org/abs/1512.03385",
    cardSubtitle: "Kaiming He, Xiangyu Zhang, et al.",
    cardDetailedText: "This work introduces the concept of residual networks (ResNet), which allows the training of very deep networks.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://example.com/resnet.jpg"
      }
    }
  },
];

export default researchPapers;

const textAni = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
  hidden: { opacity: 0 },

  exit: {
    opacity: 0,
    transition: {
      ease: "easeIn",
      delay: 0.2,
    },
  },
};

const textAnimation = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 1.5,
    },
  },
  hidden: { opacity: 0, y: 100 },
};

const imageAni = {
  visible: {
    opacity: 1,
  },
  hidden: { opacity: 0 },
};

const imageAnimation = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 1.5,
    },
  },
  hidden: { opacity: 0, x: 100 },
};
const heroTextAnimation = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 1.5,
    },
  },
  hidden: { opacity: 0, x: -200 },
  exit: {
    opacity: 0,
    x: 200,
    transition: {
      ease: "easeIn",
      duration: 0.8,
    },
  },
};
const heroImage = {
  visible: {
    opacity: 1,
    y: 1,
    transition: {
      ease: "easeOut",
      duration: 1.5,
    },
  },
  hidden: { opacity: 0, x: -100 },

  exit: { opacity: 0, x: 100 },
};
const modalAni = {
  visible: {
    opacity: 1,
    transition: {
      ease: "easeIn",
      delay: 0.3,
    },
  },
  hidden: { opacity: 0 },

  exit: {
    opacity: 0,
  },
};
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      delay: 0.4,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },

  exit: {
    y: 20,
    opacity: 0,
  },
};

export {
  textAni,
  textAnimation,
  imageAnimation,
  heroTextAnimation,
  imageAni,
  heroImage,
  modalAni,
  container,
  item,
};

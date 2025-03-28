import { motion, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  p:nth-child(1) {
    font-size: clamp(1px, 2.4vw, 55px);
    margin-bottom: 35px;
  }
  p:nth-child(n + 2) {
    font-size: clamp(1px, 1.3vw, 30px);
    color: #484848;
    margin-bottom: 8px;
  }
`;

const Images = styled(motion.div)`
  width: 70vw;
  height: 350px;
  display: grid;
  margin-top: 70px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 3fr 2fr 1fr;
  gap: 24px;
  div:nth-child(1) {
    grid-row: 1 / span 2;
  }
  div:nth-child(2) {
    grid-column: 2 / span 2;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    div:nth-child(1) {
      grid-row: 1 / span 2;
    }
    div:nth-child(2) {
      grid-column: 2 / span 2;
    }
    div:nth-child(3) {
      grid-column: 2 / span 2;
    }
  }
`;

const BlankBase = styled.div`
  background-color: gray;
  border-radius: 30px;
`;

const Blank = motion(BlankBase);

const imageVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
};

const wrapperVariants = {
  hover: {
    transition: { staggerChildren: 0.3 },
    opacity: 1,
  },
};

function AboutRelease() {
  const { scrollYProgress } = useViewportScroll();
  const [isVisible1, setIsVisible1] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest >= 0.3) {
        setIsVisible1(true);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <Wrapper>
      <p>컴공까지 왔으면 하고 싶은 걸 해야지!</p>
      <p>
        Release는 2014년에 창립된 서강대학교 컴퓨터공학과 유일의 프로젝트
        학회로,
      </p>
      <p>다양한 사람들이 모여 생각을 실현하는 학회입니다.</p>
      <p>프로젝트를 하고자 하는 열정과 능력을 지닌 사람들과 함께합니다.</p>
      <Images>
        {isVisible1 && (
          <Blank
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/home/home7.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            initial={{ opacity: 0, scale: 1, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}

        {isVisible1 && (
          <Blank
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/home/about1.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            initial={{ opacity: 0, scale: 1, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
        {isVisible1 && (
          <Blank
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/home/home3.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            initial={{ opacity: 0, scale: 1, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
        {isVisible1 && (
          <Blank
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/home/about7.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            initial={{ opacity: 0, scale: 1, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </Images>
    </Wrapper>
  );
}

export default AboutRelease;

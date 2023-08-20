import { Button } from "antd";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "./SlideHome.css";

export default function SlideHome() {
  const text = "learning";
  const TextAnimation = () => {
    return (
      <div>
        {text.split("").map((char, index) => {
          return (
            <motion.span
              key={char + "-" + index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.1,
                repeat: Infinity,
                repeatDelay: 4,
              }}
            >
              {char}
            </motion.span>
          );
        })}
      </div>
    );
  };
  return (
    <div className="px-[20px] md:px-[50px] grid grid-cols-1 md:grid-cols-2">
      <div className="col-span-1">
        <div className="h-full flex flex-col items-center justify-center">
          <div className="max-w-[500px] text-center md:text-left">
            <div className="wrapper">
              <h2 className="static-txt font-bold text-2xl md:text-4xl lg:text-5xl mb-4">
                Tại sao bạn muốn học lập trình?
              </h2>
              <TypeAnimation className="dynamic-txts"
                sequence={[
                  "Tôi muốn chuyển ngành.",
                  1000, 
                  "Tôi muốn lương cao.",
                  1000,
                  "Tôi muốn lập nghiệp.",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
              <h2
                className="text-green-light font-bold text-4xl md:text-5xl md:leading-[60px] lg:leading-[80px]
                flex items-baseline justify-center md:justify-start"
              >
                V
                <span className="ml-2 md:ml-3 text-2xl md:text-4xl">
                  {<TextAnimation />}
                </span>
              </h2>
              <Button
                type="text"
                size="large"
                className="bg-[#f6ba35] colorBorder text-white mt-3"
              >
                Bắt đầu nào
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <img
          src="./images/slideHome.png"
          className="w-full h-full mx-auto object-cover"
          alt=""
        />
      </div>
    </div>
  );
}

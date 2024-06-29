"use client";

import Image from "next/image";
import { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { SignupForm } from "./form";
import { LoginForm } from "./login_form";
import { ForgetPassForm } from "./forget_form";

export default function LogReg() {
  const swiperRef: any = useRef();

  return (
    <LoginMain className="mx-auto max-w-2xl px-4">
      <div className="rounded-3xl border bg-background p-8 shadow-sm-light border-t-2 border-white before:content-[''] before:w-full before:h-full before:absolute before:bottom-0 before:border-b before:border-zinc-600/20 before:rounded-3xl before:z-0 mt-4">
        <Swiper
          slidesPerView={"auto"}
          allowTouchMove={false}
          modules={[]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/logo.png"
                width={80}
                height={80}
                alt="Login Picture"
                className="logoImg"
              />
              <h2 className="mt-8">Sign up</h2>
              <div className="midField">
                <SignupForm />
                <div className="z-10 flex w-full items-center gap-4 py-6">
                  <div className="h-px w-full bg-slate-300 shadow-[0_1px_0_0_rgba(255,255,255,0.75)]"></div>
                  <span className="text-sm font-semibold text-slate-500/75 drop-shadow-[0_1px_0_rgba(255,255,255,0.75)]">
                    OR
                  </span>
                  <div className="h-px w-full bg-slate-300 shadow-[0_1px_0_0_rgba(255,255,255,0.75)]"></div>
                </div>
                <div className="lfmfooter">
                  <p>
                    Already have an account?{" "}
                    <span onClick={() => swiperRef.current.slideNext()}>
                      Login!
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/logo.png"
                width={80}
                height={80}
                alt="Login Picture"
                className="logoImg"
              />

              <h2 className="mt-8">Sign in</h2>

              <div className="midField">
                <LoginForm />
                <div className="z-10 flex w-full items-center gap-4 py-6">
                  <div className="h-px w-full bg-slate-300 shadow-[0_1px_0_0_rgba(255,255,255,0.75)]"></div>
                  <span className="text-sm font-semibold text-slate-500/75 drop-shadow-[0_1px_0_rgba(255,255,255,0.75)]">
                    OR
                  </span>
                  <div className="h-px w-full bg-slate-300 shadow-[0_1px_0_0_rgba(255,255,255,0.75)]"></div>
                </div>
                <div className="lfmfooter">
                  <p>
                    Forgot Password?{" "}
                    <span onClick={() => swiperRef.current.slideNext()}>
                      Click Here!
                    </span>
                  </p>
                  <p>
                    First Time?{" "}
                    <span onClick={() => swiperRef.current.slidePrev()}>
                      Sign-Up
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/logo.png"
                width={80}
                height={80}
                alt="Login Picture"
                className="logoImg"
              />
              <h2 className="mt-2">IntellectiQ</h2>

              <h2 className="mt-8">Password Reset</h2>

              <div className="midField">
                <ForgetPassForm />
                <div className="lfmfooter">
                  <div className="z-10 flex w-full items-center gap-4 py-6">
                    <div className="h-px w-full bg-slate-300 shadow-[0_1px_0_0_rgba(255,255,255,0.75)]"></div>
                    <span className="text-sm font-semibold text-slate-500/75 drop-shadow-[0_1px_0_rgba(255,255,255,0.75)]">
                      OR
                    </span>
                    <div className="h-px w-full bg-slate-300 shadow-[0_1px_0_0_rgba(255,255,255,0.75)]"></div>
                  </div>
                  <p>
                    Go back to{" "}
                    <span onClick={() => swiperRef.current.slideTo(1)}>
                      Login
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </LoginMain>
  );
}

const LoginMain = styled.section`
  h2 {
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .midField {
    width: 90%;
    form {
      font-size: 0.8rem;
      margin-top: 1.5em;
      h3 {
        font-size: 0.9rem;
        cursor: pointer;
        font-weight: 700;

        &:hover {
          text-decoration: underline;
        }
      }
      .name {
        margin-bottom: 1.2rem;
        p {
          font-size: 18;
          font-weight: 500;
          margin-bottom: 8px;
          color: #4a5568;
        }
        .icon {
          color: #4a5568;
          cursor: pointer;
          svg {
            width: 24px;
          }
        }
      }
      .sub {
        margin-top: 0.8rem;
        button {
          font-weight: 700;
          color: #e8e8e8;
          background-color: #101727;
          border-radius: 10px;
        }
        p {
          margin-top: 2em;
          color: red;
        }
      }
    }
  }

  .lfmfooter {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    p {
      font-size: 0.9rem;

      span {
        font-size: 0.9rem;
        cursor: pointer;
        font-weight: 700;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
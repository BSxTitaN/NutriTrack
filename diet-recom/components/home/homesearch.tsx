import { Search } from "lucide-react";
import React from "react";
import styled from "styled-components";

export default function HomeInput() {
  return (
    <SearchIn className="fixed bottom-4 left-12 right-12 flex flex-col gap-2 items-center justify-center z-50">
      <div className="innerPrompt relative flex items-center justify-center overflow-hidden max-h-60 grow bg-background sm:rounded-md sm:border">
        <div className="icon">
          <Search />
        </div>
        <input
          className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
          type="text"
        />
      </div>
    </SearchIn>
  );
}

const SearchIn = styled.div`
  input {
    font-size: 1.15rem;
    flex: 1;
    padding: 0.8rem;
    border-radius: 0px 120px 120px 0px;
    background-color: #fefefe;
    color: #111111;
    width: 50%;
    background-clip: padding-box, border-box;
  }

  .innerPrompt {
    background-color: #06ad49;
    color: #ffffff;
    font-size: 14px;
    width: fit-content;
    height: fit-content;
    border-radius: 50px;
    padding: 5px;
    width: 50%;
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));

    .icon {
      background-color: #fefefe;
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 120px 0px 0px 120px;
      color: #111111;
    }
  }
`;

"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Calendar } from "../ui/calendar";
import axios from "axios";

export function HomeBody() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [nutritionData, setNutritionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/8000/get_recommendation");
        setNutritionData(response.data);
      } catch (error) {
        console.error("Error fetching nutrition data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <HomeMain className="flex flex-1 flex-col items-center">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        fromYear={2000}
        toYear={2060}
      />

      <div className="mainSec">
        <div className="mutitle flex flex-col my-8">
          <h2 className="text-2xl">Today Diet Plan</h2>
        </div>
        <div className="grid w-full grid-cols-1 gap-4">
          {nutritionData.map((item: any) => (
            <div
              key={item.id}
              className="md:rounded-xl border-y-2 md:border-2 border-zinc-100 md:bg-gradient-to-b from-white from-50% to-gray-100/60 flex items-center p-8 md:p-8 justify-between gap-8 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-full"
              />
              <div>
                <h2 className="text-balance">{item.name}</h2>
                <p>Protein: {item.protein}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HomeMain>
  );
}

const HomeMain = styled.section`
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
